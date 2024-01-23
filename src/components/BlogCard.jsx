import pic from '../assets/imgs/headshot.jpeg';

function BlogCard({key, blog, classes}){
    const classNames = `${classes} drop-shadow-xl grid rounded-3xl p-3 w-[250px] h-[160px] text-white my-4`;
    return (
        <div
            key={key}
            className={classNames}
        >
            <div className="flex justify-between">
                <div>
                    <div className="text-2xl">
                        {blog.title}
                    </div>
                    <div className='italic text-xs font-roboto'>{blog.date}</div>
                </div>
                <img className="w-[90px] h-[90px] rounded-full" src={pic} />
            </div>
            <div className="justify-self-start self-end font-roboto text-sm">
                {blog.snippet}
            </div>
        </div>
    )
}

export default BlogCard;