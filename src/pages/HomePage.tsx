import Carousel from '../components/Carousel';
import rin from '../assets/imgs/rin.png';
import fitness from '../assets/imgs/fitness.png';
import CarouselCard from "../components/CarouselCard";
import { BsArrowDownCircle } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function HomePage() {
    const location = useLocation();
    const indices = [0, 1, 2]
    const projects = [
        { name: "RootedInNature", image: rin, githubLink: 'https://github.com/B-Musick/sqr_rooted_in_nature' },
        { name: "Fitness App", image: fitness },
        { name: "LUME Assistant UI" },
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
                    items={projects}
                    itemVariants={projectVariants}
                    itemLocations={positions}
                    itemStyle={projectStyle}
                    indices={indices}
                    carouselTitle="In Progress"
                    CarouselItem={CarouselCard}
                />
            </div>
        </main>
    )
}

export default HomePage;