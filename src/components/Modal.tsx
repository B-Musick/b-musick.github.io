import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import React from 'react';
import { ModalProps }  from '../lib/types';
import { IoIosCloseCircle } from "react-icons/io";

const Modal: React.FC<ModalProps> = ({ onClose, children, actionBar, classes, childClasses }) => {
    useEffect(()=>{
        document.body.classList.add('overflow-hidden');
    
        // When modal being removed, need to remove the class
        return ()=>{
            document.body.classList.remove('overflow-hidden');
        }
    }, [])

    return ReactDOM.createPortal(
        <div className='flex'>
            <div className="fixed inset-0 bg-gray-400 opacity-80 z-[1]" onClick={onClose}></div>
            <div className={`fixed inset-x-5 inset-y-36 lg:inset-40 rounded-3xl z-[1] ${classes}`}>
                <button className='absolute -right-2 -top-2 z-[1]' onClick={onClose}>
                    <IoIosCloseCircle className='text-white' />
                </button>
                <div className={`flex flex-col justify-between h-full ${childClasses}`}>
                    {children}
                </div>
                <div className="flex justify-end absolute bottom-0 h-fit w-full">
                    {actionBar}
                </div>
            </div>
        </div>,
        
        document.querySelector('.modal')!
    )
}

export default Modal;