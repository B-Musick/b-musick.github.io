import React from "react";
import { BlogComponentType } from "../../lib/types";

const Header: React.FC<BlogComponentType> = ({children}) => {
    return (
        <h1 className="font-bold text-2xl text-center m-4">
            {children}
        </h1>
    )
}

export default Header;