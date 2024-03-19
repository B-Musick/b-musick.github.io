// Fix for import issue - https://stackoverflow.com/questions/73459654/import-markdown-files-dynamically-with-vite
import { useParams, useSearchParams, useLocation } from 'react-router-dom';
import Markdown from 'markdown-to-jsx'
import { useState, useEffect } from 'react';
import Code from '../components/blog/Code';
import Header from '../components/blog/Header';
import Paragraph from '../components/blog/Paragraph';
import Section from '../components/blog/Section';
import SubHeader from '../components/blog/SubHeader';
import UnorderedList from '../components/blog/UnorderedList';
import useFetchFileData from '../hooks/useFetchFileData';

import Blockquote from '../components/blog/Blockquote';

function BlogShowPage() {
    const params = useParams();
    const location = useLocation();
    let post, metadata;

    if(location.state) {
        ({post, metadata} = location.state);

    } else {
        [post, metadata] = useFetchFileData(`../../src/assets/blogs/${params.blogId}.md`);
    }

    return (
        <div className="w-full h-full bg-red-200 flex justify-center" style={{backgroundImage:"url('/imgs/bg2.jpg')"}}>
            <div className="w-[650px] flex flex-col justify-start m-8 mt-36 bg-white">
                <img src={metadata.image} alt="test" className="w-full h-96" />

                <Markdown className="w-full p-5" options={{ 
                    wrapper: 'article',
                    overrides:{
                        h3: { component: Section },
                        code: { component: Code },
                        h1: { component: Header },
                        h2: { component: SubHeader },
                        p: { component: Paragraph },
                        blockquote: {component: Blockquote},
                        ul: {component: UnorderedList}
                    } 
                }}>
                    {post}
                </Markdown>
            </div>
        </div>
    )
}
export default BlogShowPage;