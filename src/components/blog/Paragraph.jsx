const Paragraph = ({children})=>{
    const paragraph = children[0][0] !== '~' ?
        <p className="w-full mb-5">{children}</p> :
        <section className="w-full">&emsp; {children[0].slice(1)}</section>

    return (paragraph)
}

export default Paragraph;