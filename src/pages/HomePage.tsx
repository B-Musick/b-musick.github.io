
import Carousel from '../components/Carousel.tsx';

import { projects, work } from '/src/data.json'

import CarouselCard from "../components/CarouselCard.tsx";
import { FaAngleDoubleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Modal from '../components/Modal.tsx';
import { useState } from 'react';
import { Project } from '../lib/types';
import ProjectGallery from '../views/ProjectGallery';

function HomePage() {
    const [userScrolled, setUserScrolled] = useState(false);
    const [scrolledPastProjects, setScrolledPastProjects] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState<Project>({} as Project);

    const location = useLocation();
    const indices = [0, 1, 2, 3, 4]
    const projectVariants = {
        center: { x: " 0%", scale: 1, zIndex: 5, skewY: "0deg" },
        left1: { x: "-36%", scale: 0.7, zIndex: 3, skewY: "10deg", brightness: "5%" },
        left2: { x: "-50%", scale: 0.5, zIndex: 2, skewY: "15deg" },
        right2: { x: "50%", scale: 0.5, zIndex: 2, skewY: "-15deg" },
        right1: { x: "36%", scale: 0.7, zIndex: 3, skewY: "-10deg" },

    }
    const positions = [
        "center",
        "left1",
        "left2",
        "right2",
        "right1"
    ]
    const projectStyle = { width: '15em', height: "18em", position: 'absolute', backgroundImage: '', backgroundSize: 'cover' }

    window.onscroll = () => {
        setUserScrolled(true)

        if(window.scrollY > 640) {
            setScrolledPastProjects(true)
        }
    }

    const handleModalOpen = (modalValue:Project) => {
        setModalContent(modalValue);
        setShowModal(true);
    }

    const handleModalClose = () => {
        setShowModal(false);
    }

    // const actionBar = <div className='bg-gray-100 my-4 mx-14 rounded-xl w-full p-2'><button onClick={handleModalClose}>Accept</button></div>;
    const actionBar = ""

    const modal = <Modal classes={modalContent.classes} childClasses={modalContent.childClasses} className="z-[0]" onClose={handleModalClose} actionBar={actionBar}>
        {/* receive children prop in Modal */}
        <ProjectGallery modalContent={modalContent}/>
    </Modal>;

    return (
        <main className="w-full">
            <div className="h-screen bg-gradient-to-br dark:from-cyan-900 dark:to-gray-900 from-cyan-700 to-blue-900 font-lobster text-teal-200 flex justify-center items-center relative">
                <h1 className="text-5xl m-10">Hello friend. <br /> I'm Brendan Musick, <br />Full Stack Developer. </h1>
                <Link 
                    className="animate-bounce absolute bottom-20 w-10 h-10 mb-5"
                    to={{pathname: `/`, hash:'personal'}}
                >
                    <FaAngleDoubleDown className={`w-10 h-10 ${location.hash == '' && !userScrolled ? '':'hidden'}`} />
                </Link>
            </div>
            <div className="h-screen bg-gradient-to-bl dark:from-gray-900 dark:to-cyan-900 from-blue-900 to-cyan-700 flex flex-col justify-center items-center relative text-white" id="personal">
                <Carousel 
                    items={projects} 
                    itemVariants={projectVariants} 
                    itemLocations={positions}
                    itemStyle={projectStyle}
                    indices={indices}
                    carouselTitle="Personal"
                    CarouselItem={CarouselCard}
                    modalAction={handleModalOpen}
                />
                <Link 
                    className={`animate-bounce absolute bottom-20 w-10 h-10 mb-5  ${location.hash == '#personal' && !scrolledPastProjects ? '':'hidden'}`}
                    to={{pathname: `/`, hash:'enterprise'}}
                >
                    <FaAngleDoubleDown className={`w-10 h-10`} />
                </Link>
            </div>
            <div className="h-screen bg-gradient-to-br from-cyan-700 to-blue-900 dark:from-cyan-900 dark:to-gray-900 flex justify-center items-center" id="enterprise">
                <Carousel
                    items={work}
                    itemVariants={projectVariants}
                    itemLocations={positions}
                    itemStyle={projectStyle}
                    indices={[0]}
                    carouselTitle="Enterprise"
                    CarouselItem={CarouselCard}
                    modalAction={handleModalOpen}
                />
            </div>
            {showModal && modal}
        </main>
    )
}

export default HomePage;