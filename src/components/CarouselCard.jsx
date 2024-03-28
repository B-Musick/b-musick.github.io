import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

function CarouselCard({ item, key, itemVariants, animatedItem, itemStyle, clickCard }){
    const {githubLink, name} = item;

    const itemStyling = {
        ...itemStyle,
        backgroundImage: `url(${item.image})`,
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
            <a href={item.githubLink}><FaGithub className="mx-2" /></a>
            <TbWorld />
        </div>
        <div className="justify-self-start self-end font-lobster text-3xl">
            {item.name}
        </div>
    </motion.div>)
}

export default CarouselCard;