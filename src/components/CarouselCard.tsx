import React from "react";
import { CarouselCardProps } from "../lib/types";
import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

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
            <a href={item.github}><FaGithub className="mx-2" /></a>
            <TbWorld />
        </div>
        <div className="justify-self-start self-end font-lobster text-3xl">
            {item.name}
        </div>
    </motion.div>)
}

export default CarouselCard;