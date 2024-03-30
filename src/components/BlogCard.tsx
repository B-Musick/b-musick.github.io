import React from 'react';
import { BlogCardProps } from '../lib/types';
import FloaterCard from './FloaterCard';

const BlogCard: React.FC<BlogCardProps> = ({key, metadata, blog, classes}) => {
    const classNames = `${classes} drop-shadow-xl grid rounded-3xl p-3 w-[250px] h-[160px] text-white my-4`;
    const categories = Object.keys(metadata).includes('categories') ? metadata.categories.split(','): '';

    return (
        <div
            key={key}
            className={classNames}
            style={{backgroundImage:`url(${metadata.image})`, 
            backgroundSize: 'cover'}}
        >
            <div className="flex justify-between">
                <div>
                    <div className="text-2xl">
                        {metadata.title}
                    </div>
                    <div className='italic text-xs font-roboto'>{metadata.date}</div>
                    {categories && <div className="mt-2 flex">
                        {categories.map(category => <FloaterCard skill={category}/> )}
                    </div>}
                </div>
            </div>
            <div className="justify-self-start self-end font-roboto text-sm">
                {metadata.subtitle}
            </div>
        </div>
    )
}

export default BlogCard;