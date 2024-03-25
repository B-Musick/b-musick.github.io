// Fix for import issue - https://stackoverflow.com/questions/73459654/import-markdown-files-dynamically-with-vite
import { useParams, useLocation } from 'react-router-dom';
import Markdown from 'markdown-to-jsx'
import Code from '../components/blog/Code';
import Header from '../components/blog/Header';
import Paragraph from '../components/blog/Paragraph';
import SubSubHeader from '../components/blog/SubSubHeader';
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
        <div className="w-full h-full flex justify-center bg-gradient-to-br dark:from-cyan-900 dark:to-gray-900 from-cyan-700 to-blue-900">
            <div id="blog-content" className="max-w-[650px] w-full dark:text-white flex flex-col justify-start sm:m-8 sm:mt-36 dark:bg-white/20 bg-white/85">
                <img src={metadata.image} alt="test" className="w-full h-96" style={{borderRadius: '0 0 100% 100%/40px'}} />

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
            </div>
        </div>
    )
}
export default BlogShowPage;