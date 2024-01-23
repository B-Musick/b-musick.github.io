import BlogCard from '../components/BlogCard';
import blogsJSON from '../assets/blogs.json';

function BlogPage(){
    const colors = ['bg-green-300', 'bg-blue-400', 'bg-red-400', 'bg-amber-500'];

    const blogs = blogsJSON["blogs"].map((blog, index)=>{
        return (
            <a href={'/blog/'+index}>
                <BlogCard blog={blog} key={index} classes={colors[index % colors.length]} />
            </a>
        )
    });
    
    return (
        <main className="w-full">
            <div className="h-screen bg-gradient-to-br from-cyan-700 to-blue-900 font-lobster text-teal-200 flex pt-28 justify-around overflow-scroll flex-wrap p-10">
                {blogs}
            </div>
        </main>
    )
}

export default BlogPage;