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