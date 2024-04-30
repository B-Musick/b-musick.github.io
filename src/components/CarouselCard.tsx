import React from "react";
import { CarouselCardProps } from "../lib/types";
import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaInfoCircle } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";

const CarouselCard: React.FC<CarouselCardProps> = ({ item, key, itemVariants, animatedItem, itemStyle, clickCard }) => {
    const itemStyling = {
        ...itemStyle,
        backgroundImage: `url(${item.imagePath+item.images[0]})`,
        backgroundPosition: 'center'
    };

    return (<motion.div
        key={key}
        className="drop-shadow-lg grid bg-red-400 rounded-3xl p-3"
        variants={itemVariants}
        initial="center"
        animate={animatedItem}
        transition={{ duration: 0.5 }}
        style={itemStyling}
        onClick={()=>clickCard(item)}
    >
        <div className="self-start justify-self-end flex text-3xl">
            {/* TODO: add information button */}
            {/* <a href={item.info}><FaInfoCircle /></a> */}
            <GrGallery className="mr-2"/>
            <a href={item.github} className={item.github ? 'visible' : 'hidden'}><FaGithub className="mr-2" /></a>
            <a href={item.website} className={item.website ? 'visible': 'hidden'}><TbWorld /></a>
        </div>
        <div className="justify-self-start self-end font-lobster text-3xl">
            {item.name}
        </div>
    </motion.div>)
}

export default CarouselCard;