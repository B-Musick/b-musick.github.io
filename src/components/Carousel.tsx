/**
 * Source: https://www.youtube.com/watch?v=RMTdoi_5sAA
 */
import { useState } from "react";
import React from 'react';

import { CarouselProps } from "../lib/types";

const Carousel: React.FC<CarouselProps> = ({items, itemVariants, itemLocations, itemStyle, indices, carouselTitle, CarouselItem, modalAction}) => {
    const [itemIndexes, setItemIndexes] = useState(indices);

    const handlePrev = () => {
        setItemIndexes((prevIndices) => {
            const newIndices = prevIndices.map((prevIndex) => {
                let nextIndex = (prevIndex - 1);
                return nextIndex < 0 ? (indices.length - 1) : nextIndex % indices.length; 
            })
            return newIndices;
        })
    }

    const handleNext = () => {
        setItemIndexes((prevIndices)=>{
            const newIndices = prevIndices.map((prevIndex)=>(prevIndex + 1) % indices.length);
            return newIndices;
        })
    }

    return (
        <>
            <div className="flex items-center flex-col justify-center relative w-full h-full z-[0]">
                <div className="mb-[3em] font-lobster text-teal-600 text-3xl">{carouselTitle}</div>

                {items.map((item, index)=>{
                    return <CarouselItem 
                        item={item} 
                        key={index} 
                        itemVariants={itemVariants} 
                        animatedItem={itemLocations[itemIndexes[index]]} 
                        itemStyle={itemStyle}
                        clickCard={modalAction}
                    />
                })}
                <div className="flex h-[21em] w-96 justify-between">
                    <button onClick={handlePrev} className="self-start z-8 h-full w-20" />
                    <button onClick={handleNext} className="justify-self-end self-end z-8 h-full w-20" />
                </div>
            </div>
        </>
    )
}

export default Carousel;