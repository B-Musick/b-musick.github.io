import React from "react";
import { SocialsProps } from "../lib/types";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Socials: React.FC<SocialsProps> = ({github, linkedin}) => {
    return (
        <div className="flex fixed bottom-8 right-8 flex-col text-white z-[10]">
            <a href={linkedin}>
                <div className="text-xl items-center p-2 mb-2 rounded-full bg-white/5 w-fit z-[1] backdrop-opacity-95 backdrop-invert">
                    <FaLinkedin />
                </div>
            </a>
            <a href={github}>
                <div className="text-xl items-center p-2 mb-2 rounded-full bg-white/5 w-fit z-[1] backdrop-opacity-95 backdrop-invert">
                    <FaGithub />
                </div>
            </a>
        </div>

    )
}

export default Socials;