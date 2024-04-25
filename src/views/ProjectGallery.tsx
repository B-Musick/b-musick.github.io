import { useState } from "react";
import { Project } from "../lib/types";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

type ProjectGalleryProps = {
    modalContent: Project,
    classes: string
}

function ProjectGallery({ modalContent, classes }: ProjectGalleryProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const handlePrev = () => {
        setCurrentImageIndex((currentImageIndex-1) % modalContent.images.length);
    }

    const handleNext = () => {
        setCurrentImageIndex((currentImageIndex+1) % modalContent.images.length);
    }

    return (
        <div className={`rounded-t-3xl h-full ${classes}`} style={{backgroundImage:`url(${modalContent.imagePath+modalContent.images[currentImageIndex]})`, backgroundSize:'100% 100%'}}>
            <div className="flex h-full w-full justify-between">
                <button onClick={handlePrev} className="z-8 h-full bg-black opacity-40 w-10 rounded-tl-3xl"><IoMdArrowDropleft className="text-white w-10 h-10"/></button>
                <button onClick={handleNext} className="z-8 h-full bg-black opacity-40 w-10 rounded-tr-3xl"><IoMdArrowDropright className="text-white w-10 h-10"/></button>                
            </div>
            <div className='bg-gray-100 rounded-b-xl w-full h-fit p-2 text-sm'>{modalContent.captions[currentImageIndex]}</div>

        </div>
    )
}

export default ProjectGallery;