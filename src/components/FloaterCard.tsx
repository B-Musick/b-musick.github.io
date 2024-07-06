import React from "react";
import { FloaterCardProps } from "../lib/types";

const FloaterCard: React.FC<FloaterCardProps> = ({skill}) =>{
    return (
        <div className="flex text-xs items-center px-2 my-1 rounded-full bg-white text-black w-fit mr-1">
            {skill}
        </div>
    )
}

export default FloaterCard;