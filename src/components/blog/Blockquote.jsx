const Blockquote = ({children})=>{
    return (
        <blockquote className="w-full text-blue-200 italic">
            {/* TODO: add styling to this */}
            {children}
        </blockquote>
    )
}

export default Blockquote;