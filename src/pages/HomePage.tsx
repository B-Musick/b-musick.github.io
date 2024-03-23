import Carousel from '../components/Carousel';
import rin from '../assets/imgs/rin.png';
import fitness from '../assets/imgs/fitness.png';
import CarouselCard from "../components/CarouselCard";


function HomePage() {
    const indices = [0, 1, 2]
    const projects = [
        { name: "RootedInNature", image: rin, githubLink: 'https://github.com/B-Musick/sqr_rooted_in_nature' },
        { name: "Fitness App", image: fitness },
        { name: "LUME Assistant UI" },
        // { name: "test4" },
        // { name: "test5" }
    ]

    const projectVariants = {
        center: { x: " 0%", scale: 1, zIndex: 5, skewY: "0deg" },
        left1: { x: "-36%", scale: 0.7, zIndex: 3, skewY: "10deg", brightness: "5%" },
        // left: { x: "-72%", scale: 0.5, zIndex: 2, skewY: "20deg" },
        right1: { x: "36%", scale: 0.7, zIndex: 3, skewY: "-10deg" },
        // right: { x: "72%", scale: 0.5, zIndex: 2, skewY: "-20deg" },
    }

    const positions = [
        "center",
        "left1",
        // "left",
        // "right",
        "right1"
    ]

    const projectStyle = { width: '15em', height: "18em", position: 'absolute', backgroundImage: '', backgroundSize: 'cover' }

    return (
        <main className="w-full">
            <div className="h-screen bg-gradient-to-br dark:from-cyan-900 dark:to-gray-900 from-cyan-700 to-blue-900 font-lobster text-teal-200 flex justify-center items-center">
                <h1 className="text-5xl m-10">Hello friend. <br /> I'm Brendan Musick, <br />Full Stack Developer. </h1>
            </div>
            <div className="h-screen bg-gradient-to-bl dark:from-gray-900 dark:to-cyan-900 from-blue-900 to-cyan-700 flex flex-col justify-center items-center text-white" id="complete">
                <Carousel 
                    items={projects} 
                    itemVariants={projectVariants} 
                    itemLocations={positions}
                    itemStyle={projectStyle}
                    indices={indices}
                    carouselTitle="Projects"
                    CarouselItem={CarouselCard}
                />
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