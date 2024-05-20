---
title: "Biopython User Interface"
subtitle: "Implementing react UI with Django Api accessing Biopython functions"
date: "18-05-2024"
image: "/imgs/biopython.png"
categories: "react, django, biopython, programming"
fontColor: "text-black"
---

# Biopython User Interface
~Trying to use biopython is difficult without any sort of user interface. I decided to create my own Django API which accesses the tools of biopython, then connect it to a React frontend.

- Entrez Database

## Entrez Database
I first wanted to set up a Django app for calling the [Entrez database](https://www.ncbi.nlm.nih.gov/Web/Search/entrezfs.html).  I used the Bio.Entrez module to access utilities from NCBI known as of the Entrez Programming Utilities (also known as [EUtils](https://www.ncbi.nlm.nih.gov/books/NBK25500/)).

According to [Entrez Guidelines](http://biopython.org/DIST/docs/tutorial/Tutorial.html#sec198), if you have an API key then you can do 10 requests per second, otherwise you can only do 3, Bio.Entrez will automatically control this. An email is suggested to be provided as well incase they need to contact you about over usage, etc.

### Retrieve list of databases (EInfo)
In order to use Bio.Entrez, it will need to know which of the NCBI databases you want to use. There are 20 different databases which can be accessed, for a list of databases returned [see here](http://biopython.org/DIST/docs/tutorial/Tutorial.html#sec199).

Thus I created an endpoint **dbs_list** in the views.py file for the app, which will use biopython to call einfo() and return the database list. 

```
entrez_api/views.py
@api_view(['GET'])
def dbs_list(request):
    Entrez.email = [email@address.com]
    stream = Entrez.einfo()
    record = Entrez.read(stream)
    return Response(record['DbList'])
```

Had to register this route in the urls.py file:

```
entrez_api/urls.py
urlpatterns = [
    path('dbs_list', dbs_list, name="dbs_list"),
]
```

And this urls.py file had to be connected to the main apps **urls.py** file:

```
biopython_api/urls.py
urlpatterns = [
    path('admin/', admin.site.urls),
    path('entrez/', include('entrez_api.urls'))
]
```
Then in the react frontend, I accessed this data using react query and axios. I set up the api call:
```
biopython-ui/src/api/entrez.ts
export function getAvailableDatabases() {
    return axios.get('http://localhost:8000/entrez/dbs_list')
        .then(res => res.data);
}
```

I created a component to search and display a dropdown for the user to select which database they will use to search:

<img src="/imgs/blogs/db-dropdown.png" className="max-w-md mx-auto"/>

### Search Entrez (esearch)
In order to retrieve gene data from the entrez databases, you need to know the id's associated with the genes. Thus, biopython has a method **Entrez.esearch** which will take in the database selected, a search term and max amount of results you want returned. Calling this will return a list of ids for results found.

```
entrez_api/views.py
def retrieveIdsFromEntrez(db_type, search_term, max_results):
    handle = Entrez.esearch(db=db_type, term=search_term, retmax=max_results)
    rec_list = Entrez.read(handle)
    handle.close()

    return rec_list['IdList']
```

### Fetch Entrez (efetch)
Now with the retrieved ids, you can either pass a single id or a list of ids. Once the data is fetched, can parse into a list of items.

```
entrez_api/views.py
def fetchSeqRecordsFromId(dbToSearch, ids, returnType):
    # Will get a list of records
    stream = Entrez.efetch(db=dbToSearch, id=ids, rettype=returnType)
    records = list(SeqIO.parse(stream, returnType)) # Seq object, can treat like string - See chapter 3 - 
    stream.close()
    
    return records
```

Need to convert some of the attributes to string so had to loop throught the records and serialize the items, luckily the **seq** attribute which is a [Sequence object](https://biopython.org/DIST/docs/tutorial/Tutorial.html#sec17) can be treated like a string:

```
entrez_api/views.py
def convertSeqRecordsToString(records):
    string_records = []

       # records are in SeqRecord format, convert
    for rec in records:
        string_records.append({
            "id": rec.id,
            "seq": str(rec.seq),
            "name": rec.name,
            "description":rec.description,
            "dbxrefs": rec.dbxrefs,
            # "features": rec.features,
            # Will have to create a serializer for annotations
            "annotations": json.dumps(str(rec.annotations)),
            "letter_annotations": rec.letter_annotations
        })
    
    return string_records
```

Thus the final url endpoint looks like the following using the defined methods:

```
entrez_api/views.py
@api_view(['GET'])
def search(request):
    Entrez.email = "bmuze1@gmail.com"
    # From the request it will take term from the search bar and use it for the term
    search_term = request.query_params['searchTerm']
    max_results = request.query_params['maxResults']
    db_type= request.query_params['databaseType']

    id_list = retrieveIdsFromEntrez(db_type, search_term, max_results)

    records = fetchSeqRecordsFromId("nucleotide", id_list, "gb")

    return Response(convertSeqRecordsToString(records))
```

The user interface with a search output looks like this:
<img src="/imgs/blogs/entrez-search.png" className="max-w-md mx-auto"/>

### Testing
To ensure this route always returns the needed data, I tested Django's Rest Framework:

```
entrez_api/tests.py
from django.test import TestCase
from rest_framework import status
from django.urls import reverse;
from rest_framework.test import APITestCase, APIClient
# Reverse takes in view name and gives us the path to the rout

# Create your tests here.
class EntrezTests(APITestCase):
    def setUp(self):
        # Run every time test is run
        self.dbs_list_url = reverse('dbs_list')
        self.search_url = reverse('search')

        return super().setUp()
    
    def tearDown(self):
        # Run after done
        return super().tearDown()

    def test_dbs_list_response(self):
        response = self.client.get(self.dbs_list_url, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 40)
        self.assertIn("nucleotide",response.data)
```

Testing that the search route works properly, passed some search params and checked the response:
```
entrez_api/tests.py
def test_search_response(self):
    response = self.client.get(
        self.search_url, 
        {
            'databaseType': 'nucleotide', 
            'searchTerm':'CRT[Gene Name] AND "Plasmodium falciparum"[Organism]',
            'maxResults': 5
        }
    )
    self.assertEqual(response.status_code, status.HTTP_200_OK)
    self.assertEqual(len(response.data), 5)
    self.assertEqual("OR483864.1",response.data[0]['id'])
```
