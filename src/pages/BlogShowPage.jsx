import blogsJSON from '../assets/blogs.json';
import { useParams } from 'react-router-dom';

function BlogPageShow() {
    const params = useParams();

    const blog = blogsJSON["blogs"][params.blogId];

    return (
        <div className="mt-36 w-full flex items-center flex-col">
            <div className='flex flex-col w-3/4'>
                <h1 className="text-5xl font-lobster">{blog.title}</h1>
                <p className="italic text-sm mt-2 font-thin">{blog.date}</p>
            </div>
            <div className='flex flex-col w-3/4 font-extralight mt-5'>
                {blog.text.map((text, index)=>{
                    return (<div className="my-1" key={index} dangerouslySetInnerHTML={{ __html: text }}/>)
                })}
            </div>
        </div>
    )
}
export default BlogPageShow;