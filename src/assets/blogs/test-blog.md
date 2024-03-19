---
title: "Making of my Blog"
subtitle: "subtitle of blog"
date: "Real date"
image: "/imgs/markdown.png"
categories: "react, programming"
---
# Making of my Blog

### Im making this blog to document my programming projects and better reflect on the implementations I make. Hopefully this will serve as a reference for others to inspire them in their own programming projects.

- Mardown
- Gray-Matter
- useLocation
- Extracting Data from Markdown

## Markdown
I've decided to implement this blog so I can write a Markdown file, and it will automatically parse it into the styled blog.

``` 
this is code 
```


Paragraph

## subheader
another paragraphasldfjkasdlflkjadfslkjadsfl;d
asdfljdsfalkjdfsa

```
more code
```

## Gray-matter
Get the metadata from the markdown file

## useLocation
Delve into how you had to integrate useLocation to pass the imported markdown file using the filenames listed in the json file

## syntax highlighter and clipboard 

## Extracting data from Markdown
Made a hook which called **useFetchFileData** which is taking in the file path as a parameter. It imports the specific file using **import**, extracts the data from the file and then the text from this data (fileText). The post and metadata is then extraced into their own state variables and returned.  

```
import { useState, useEffect } from 'react';
import matter from 'gray-matter';
import { Buffer } from 'buffer';

// @ts-ignore
window.Buffer = Buffer; // Was getting buffer error so had to add this https://stackoverflow.com/questions/70420479/react-uncaught-referenceerror-buffer-is-not-defined

function useFetchFileData(filePath) {
    const [post, setPost] = useState('');
    const [metadata, setMetadata] = useState('');

    useEffect(() => {
        const fetchFileData = async () => {
            try {
                const file = await import(/* @vite-ignore */filePath);
                const fileData = await fetch(file.default);
                const fileText = await fileData.text();

                setPost(fileText);
                setMetadata(matter(post).data)
            } catch(err) {
                console.log("Error importing file")
            }
        }

        fetchFileData();
    });

    return [post, metadata];
}

export default useFetchFileData;
```

## Markdown metadata
Markdown metadata can be defined