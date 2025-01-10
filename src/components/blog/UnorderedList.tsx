const UnorderedList = ({children, blogId})=>{
    return (
        <nav className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-3 my-4">
            <ul className="w-full text-md font-bold">
                {children.map((item, index)=>{
                    let listItem = `${index}. ${item.props.children[0]}`
                    return <a key={index} className="!text-sky-600 hover:!text-sky-400" href={`/blog/${blogId}/${item.props.children[0].toLowerCase().split(' ').join('-')}`}><li>{listItem}</li></a>   
                })}
            </ul>
        </nav>
    )
}

export default UnorderedList;