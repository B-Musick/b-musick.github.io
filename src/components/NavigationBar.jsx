import { NavLink } from "react-router-dom";
import NavigationBarLink from './NavigationBarLink';
import { useRef } from "react";

function NavigationBar() {
    const workButtons = useRef(null);

    const links = [
        { label: "About", path: "/about" },
        { label: "Technology", path: "/technology" },
        { label: "Blog", path: "/blog" },
    ]

    const toggleWorkButtons = (isActive) => {
        isActive === "/" ? workButtons.current.classList.remove('hidden') :
                           workButtons.current.classList.add('hidden');        
    }
    const renderedLinks = links.map((link) => {
        return <NavigationBarLink key={link.label} link={link} activeFunction={toggleWorkButtons} />
    });

    return (
        <nav className="flex text-sm items-center p-2 m-10 rounded-full bg-white/5 fixed w-fit z-[1]">
            <NavigationBarLink classes="group" link={{ label: "Work", path: "/" }} activeFunction={toggleWorkButtons} />
            <div ref={workButtons}>
                <NavLink to="#complete" className="group-focus:block font-light text-xs focus:text-teal-200 focus:opacity-30 p-2 rounded-full">Complete</NavLink>
                <NavLink className="group-focus:block font-light text-xs focus:text-teal-200 focus:opacity-30 rounded-full p-2 rounded-full" to="#in-progress" >In Progress</NavLink>
            </div>

            {renderedLinks}
        </nav >
    )
}

export default NavigationBar;