---
title: "Making of my Blog"
subtitle: "Creation of blog which parses from Mardown files"
date: "15-04-2024"
image: "/imgs/markdown.png"
categories: "react, programming"
---
# Making of my Blog

~Im making this blog to document my programming projects and better reflect on the implementations I make. Hopefully this will serve as a reference for others to inspire them in their own programming projects.

- Extracting Data from Markdown
- Parsing Markdown
- useLocation

## Extracting Data from Markdown
Made a hook which called **useFetchFileData** which is taking in the file path as a parameter. It imports the specific file using **import**, extracts the data from the file and then the text from this data (fileText). The post and metadata is then extraced into their own state variables and returned.  

```
-
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

### gray-matter
In the above code block, you will see within the try block, **matter()** is called on the markdown file. This method is from the package [gray-matter](https://www.npmjs.com/package/gray-matter) and is used to extract the metadata from the markdown file (aka. front matter). I am using this data to easily extract the blog title, subtitle, date, image.

### Code and Copying to Clipboard
Most sites which encorporate code sections, allow you to visually see the code easiy as well as copy the code to your clipboard. For this I used two separate packages. To allow user to copy to clip board, I used [react-copy-to-clipboard](https://www.npmjs.com/package/react-copy-to-clipboard). I added some logic to show when the user presses this (changes icon from clipboard to checkmark).

To highlight the code easily, I used [react-syntax-highlighter](https://www.npmjs.com/package/react-syntax-highlighter), which gives the code its box styling.

```
-
const Code = ({children}) => {
    const [copied, setCopied] = useState(false);
    return (
        <div className="relative w-full my-6 dark:!text-white">
            <CopyToClipboard 
                className="absolute right-1 top-2" 
                text={children} 
                onCopy={()=> setCopied(true)}
            >
                <button>
                    {copied ? <FaCheckSquare /> : <FaCopy />}
                </button>
            </CopyToClipboard>
            <SyntaxHighlighter 
                useInlineStyles={false} 
                className="bg-gray-100 py-5 px-2 dark:bg-gray-800 overflow-auto rounded-xl" 
                codeTagProps={{className:'dark:text-white'}}
            >
                {children}
            </SyntaxHighlighter>
        </div>
    )
}
```

## Parsing Markdown
I've decided to implement this blog so I can write a Markdown file, and it will automatically parse it into the styled blog. I used the package [markdown-to-jsx](https://www.npmjs.com/package/markdown-to-jsx), which allows you to place markdown string within a component appropriately named **<Markdown />**.

```
-
<Markdown className="w-full p-5" options={{ 
    wrapper: 'article',
    overrides:{
        h1: { component: Header },
        h2: { component: SubHeader },
        h3: { component: SubSubHeader },
        p: { component: Paragraph },
        blockquote: {component: Blockquote},
        code: { component: Code },
        ul: {component: UnorderedList},
    } 
}}>
    {post}
</Markdown>
```

There is an **options** prop which can be passed to this component, which has an overrides key, where you can define your own components associated with the specific markdown types read in through the string. Within this blog you can see the various components I have defined and styled.

### Unordered List (ul)
I've decided to designate this element as the header's legend which allows a user to easily navigate to sections of the blog (see above).

## useLocation
Delve into how you had to integrate useLocation to pass the imported markdown file using the filenames listed in the json file

# Skeleton
Here is the starter skeleton for every new blog I create:

```
-
'---
title: "Insert title"
subtitle: "Insert subtitle"
date: "date"
image: "/imgs/{filename}"
categories: "react, programming"
--

# Title

~Introduction

>This is a blockquote

## subheader
Paragraph

### subsubheader
```