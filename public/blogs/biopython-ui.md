---
title: "Biopython User Interface"
subtitle: "Implementing user interface along with Django Api to access Biopython functions"
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

I created a component to search and desplay results, within which 

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

