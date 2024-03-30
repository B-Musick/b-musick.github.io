
import Carousel from '../components/Carousel.tsx';

import { 
    fitness_images, 
    fitness_captions, 
    matrix_calc_images, 
    matrix_calc_captions, 
    rootedinnature_images, 
    rootedinnature_captions,
    protec_images,
    protec_captions
} from '../assets/data.json'

import CarouselCard from "../components/CarouselCard.tsx";
import { BsArrowDownCircle } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Modal from '../components/Modal.tsx';
import { useState } from 'react';
import { Project } from '../lib/types';
import ProjectGallery from '../views/ProjectGallery';

function HomePage() {
    
    const fitnessImages = fitness_images.map(img=> `./src/assets/imgs/fitness_app/${img}`);
    const matrixCalcImages = matrix_calc_images.map(img=> `./src/assets/imgs/matrix_calculator/${img}`);
    const rootedinnatureImages = rootedinnature_images.map(img=> `./src/assets/imgs/rootedinnature/${img}`);
    const protecImages = protec_images.map(img=> `./src/assets/imgs/protec/${img}`);

    const [showModal, setShowModal] = useState(false);
    // const [modalContent, setModalContent] = useState<Project>({} as Project);
    const [modalContent, setModalContent] = useState<Project>({} as Project);


    const location = useLocation();
    const indices = [0, 1, 2]
    const projects = [
        { name: "Fitness App", image: fitnessImages[0], githubLink: 'https://github.com/B-Musick/sqr_rooted_in_nature', imageGallery: fitnessImages, captions: fitness_captions,
            classes: 'flex justify-center', childClasses: 'w-1/2 flex justify-center' 
        },
        { name: "Matrix Calculator", image: matrixCalcImages[2], githubLink: 'https://github.com/B-Musick/sqr_rooted_in_nature', imageGallery: matrixCalcImages, captions: matrix_calc_captions },
        { name: "Rooted In Nature", image: rootedinnatureImages[0], githubLink: 'https://github.com/B-Musick/sqr_rooted_in_nature', imageGallery: rootedinnatureImages, captions: rootedinnature_captions },
    ]

    const work = [
        { name: "Protec", image: protecImages[0], githubLink: 'https://github.com/B-Musick/sqr_rooted_in_nature', imageGallery: protecImages, captions: protec_captions },

    ]

    const projectVariants = {
        center: { x: " 0%", scale: 1, zIndex: 5, skewY: "0deg" },
        left1: { x: "-36%", scale: 0.7, zIndex: 3, skewY: "10deg", brightness: "5%" },
        right1: { x: "36%", scale: 0.7, zIndex: 3, skewY: "-10deg" },
    }

    const positions = [
        "center",
        "left1",
        "right1"
    ]

    const projectStyle = { width: '15em', height: "18em", position: 'absolute', backgroundImage: '', backgroundSize: 'cover' }

    const handleModalOpen = (modalValue:Project) => {
        console.log(modalValue)
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
                    className="animate-bounce absolute bottom-0 w-10 h-10 mb-5"
                    to={{pathname: `/`, hash:'complete'}}
                >
                    <BsArrowDownCircle className={`w-10 h-10 ${location.hash == '' ? '':'hidden'}`} />
                </Link>
            </div>
            <div className="h-screen bg-gradient-to-bl dark:from-gray-900 dark:to-cyan-900 from-blue-900 to-cyan-700 flex flex-col justify-center items-center text-white relative" id="complete">
                <Carousel 
                    items={projects} 
                    itemVariants={projectVariants} 
                    itemLocations={positions}
                    itemStyle={projectStyle}
                    indices={indices}
                    carouselTitle="Projects"
                    CarouselItem={CarouselCard}
                    modalAction={handleModalOpen}
                />
                <Link 
                    className={`animate-bounce absolute bottom-0 w-10 h-10 mb-5  ${location.hash == '#complete' ? '':'hidden'}`}
                    to={{pathname: `/`, hash:'in-progress'}}
                >
                    <BsArrowDownCircle className={`w-10 h-10`} />
                </Link>
            </div>
            <div className="h-screen bg-gradient-to-br from-cyan-700 to-blue-900 dark:from-cyan-900 dark:to-gray-900 flex justify-center items-center text-white" id="in-progress">
                <Carousel
                    items={work}
                    itemVariants={projectVariants}
                    itemLocations={positions}
                    itemStyle={projectStyle}
                    indices={[0]}
                    carouselTitle="In Progress"
                    CarouselItem={CarouselCard}
                    modalAction={handleModalOpen}
                />
            </div>
            {showModal && modal}
        </main>
    )
}

export default HomePage;