import CopyToClipboard from 'react-copy-to-clipboard';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useState } from 'react';
import { FaCopy } from "react-icons/fa6";
import { FaCheckSquare } from "react-icons/fa";

const Code = ({children}) => {
    const [copied, setCopied] = useState(false);
    return (
        <div className="relative w-full my-6">
            <CopyToClipboard className="absolute right-1 top-1" text={children} onCopy={()=> setCopied(true)}>
                <button>
                    {copied ? <FaCheckSquare /> : <FaCopy />}
                </button>
            </CopyToClipboard>
            <SyntaxHighlighter>
                {children}
            </SyntaxHighlighter>
        </div>
    )
}

export default Code;