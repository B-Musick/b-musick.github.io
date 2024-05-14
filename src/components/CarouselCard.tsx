import React, { useState } from "react";
import { CarouselCardProps } from "../lib/types";
import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaInfoCircle } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";

const CarouselCard: React.FC<CarouselCardProps> = ({ item, itemVariants, animatedItem, itemStyle, clickCard }) => {
    const [showHoverInfo, setShowHoverInfo] = useState(false);
    const {github, website, hoverInfo, name, images, imagePath, childClasses} = item;
    const itemStyling = {
        ...itemStyle,
        backgroundImage: `url(${imagePath+images[0]})`,
        backgroundPosition: 'center'
    };

    return (<motion.div
        className="drop-shadow-lg grid bg-red-400 rounded-3xl p-3"
        variants={itemVariants}
        initial="center"
        animate={animatedItem}
        transition={{ duration: 0.5 }}
        style={itemStyling}
        onClick={()=>clickCard(item)}
        onHoverStart={()=>setShowHoverInfo(true)}
        onHoverEnd={()=>setShowHoverInfo(false)}
    >
        {showHoverInfo && <div className="opacity-75 absolute w-full h-full bg-black rounded-3xl hover:brightness-[25%] cursor-pointer">
        
        </div>}
        {showHoverInfo && <div className="absolute z-[2] flex justify-center p-1 items-center text-center h-full w-full text-[10px]">
            <p className={`${childClasses}`}>{hoverInfo}</p>
        </div>}

        <div className="self-start justify-self-end flex text-3xl z-[2]">
            {/* TODO: add information button */}
            {/* <a href={item.info}><FaInfoCircle /></a> */}
            <GrGallery className="mr-2"/>
            <a href={github} className={github ? 'visible z-[3]' : 'hidden'}><FaGithub className="mr-2 z-[1]" /></a>
            <a href={website} className={website ? 'visible z-[3]': 'hidden'}><TbWorld /></a>
        </div>
        <div className="justify-self-start self-end font-lobster text-3xl">
            {name}
        </div>
    </motion.div>)
}

export default CarouselCard;