import React from 'react';
import { BlogCardProps } from '../lib/types';
import FloaterCard from './FloaterCard';

const BlogCard: React.FC<BlogCardProps> = ({metadata, classes}) => {
    const classNames = `${classes} bg-gray-100 rounded-[20px] mb-4 shadow-2xl`;
    const categories = Object.keys(metadata).includes('categories') ? metadata.categories.split(','): '';

    return (
        <div className={classNames}>
            <div className="w-[700px] flex">
                <img className='rounded-l-[20px] w-[30%] h-[150px]' src={metadata.image}></img>
                <div className='w-[70%]'>
                    <div className="text-2xl w-full bg-white text-center p-2 border">
                        {metadata.title}
                    </div>
                    <div className='flex flex-row justify-between px-2'>
                    {categories && <div className="flex flex-wrap">
                        {categories.map((category:string, index: number) => <FloaterCard key={index} skill={category}/> )}
                        </div>
                    }
                    <div className='italic text-xs font-roboto font-black'>{metadata.date}</div>

                    </div>
                    <div className="justify-self-start self-end font-roboto text-sm font-black m-2">
                        {metadata.subtitle}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;