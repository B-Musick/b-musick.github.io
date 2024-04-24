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
                const file = new Request(filePath)

                fetch(file)
                    .then(data => data.text())
                    .then(text => {
                        console.log('text: ', text)

                        setPost(text);
                        setMetadata(matter(post).data)
                    });
                console.log('file path:', filePath)
                // const file = await import(/* @vite-ignore */filePath);
                // const fileData = await fetch(file.text());
                // const fileText = await file.text();
                // console.log('text: ', fileText)

                // setPost(fileText);
                // setMetadata(matter(post).data)
            } catch(err) {
                console.log("Error importing file")
            }
        }

        fetchFileData();
    });

    return [post, metadata];
}

export default useFetchFileData;