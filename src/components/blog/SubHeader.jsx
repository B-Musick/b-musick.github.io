const SubHeader = ({children})=>{
    return (
        <h2 id={`${children[0].toLowerCase().split(' ').join('-')}`} className="w-full my-4 text-xl font-bold border-b-2">
            {children}
        </h2>
    )
}

export default SubHeader;