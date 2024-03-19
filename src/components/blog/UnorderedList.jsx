const UnorderedList = ({children})=>{
    return (
        <nav class="bg-gray-100 rounded-3xl p-3 my-4">
            <ul className="w-full text-md font-bold">
                {children.map((item, index)=>{
                    console.log(item.props.children[0])
                    let listItem = `${index}. ${item.props.children[0]}`
                    return <a class="text-sky-600 hover:text-sky-400" href={`#${item.props.children[0].toLowerCase().split(' ').join('-')}`}><li>{listItem}</li></a>   
                })}
            </ul>
        </nav>
    )
}

export default UnorderedList;