import BlogCard from '../components/BlogCard.tsx';
import { Link } from 'react-router-dom';
import { filenames } from '/src/data.json'

import useFetchFileData from '../hooks/useFetchFileData.tsx';

function BlogPage(){
    const blogs = filenames.map((filename, index)=>{
        const fileSrc = `./blogs/${filename}`;
        const [post, metadata] = useFetchFileData(fileSrc);
        
        return (
            <Link 
                to={{pathname: `/blog/${filename.split('.')[0]}`}}
                state={{post, metadata}} 
                key={index}
            >
                <BlogCard blog={post} metadata={metadata} key={index} classes={setBackground(metadata, index)} />
            </Link>
        )
    });
    
    return (
        <main className="w-full h-full">
            <div className="h-screen font-lobster text-teal-200 flex pt-28 justify-around overflow-scroll flex-wrap p-10">
                {blogs}
            </div>
        </main>
    )
}

const setBackground = (metadata, index) => {
    const colors = ['bg-green-300', 'bg-blue-400', 'bg-red-400', 'bg-amber-500'];

    return metadata.image ? '' : colors[index % colors.length];
}
export default BlogPage;