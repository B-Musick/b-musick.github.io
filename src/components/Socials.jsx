import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

function Socials() {
    return (
        <div className="flex fixed bottom-8 right-8 flex-col text-white">
            <div className="text-xl items-center p-2 mb-2 rounded-full bg-white/5 w-fit z-[1] backdrop-opacity-95 backdrop-invert">   
                <FaLinkedin />
            </div>
            <div className="text-xl items-center p-2 rounded-full bg-white/5 w-fit z-[1] backdrop-opacity-95 backdrop-invert">
                <FaGithub />
            </div>
        </div>

    )
}

export default Socials;