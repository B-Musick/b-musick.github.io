import { NavLink } from "react-router-dom";
import NavigationBarLink from './NavigationBarLink.tsx';
import { useRef, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.tsx";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useLocation } from "react-router-dom";

function NavigationBar() {
    const location = useLocation();
    const { isLight, setIsLight } = useContext(ThemeContext);

    const workButtons = useRef(null);

    const links = [
        { label: "About", path: "/about" },
        { label: "Resume", path: "/resume" },
        { label: "Blog", path: "/blog" },
    ]

    const renderedLinks = links.map((link) => {
        return <NavigationBarLink key={link.label} link={link} activeFunction={null} classes={''}/>
    });

    return (
        <nav className="flex text-sm items-center p-2 m-10 rounded-full bg-white/5 fixed w-fit z-[10] text-white backdrop-opacity-95 backdrop-invert">
            <NavigationBarLink classes="group" link={{ label: "Work", path: "/" }} />
            <div className={`flex max-[500px]:hidden sm:flex-row ${location.pathname == '/' ? '':'hidden'}`}>
                <NavLink to="#personal" className="group-focus:block font-light text-xs focus:text-teal-200 focus:opacity-30 p-2 rounded-full">Personal</NavLink>
                <NavLink className="group-focus:block font-light text-xs focus:text-teal-200 focus:opacity-30 rounded-full p-2 rounded-full" to="#enterprise" >Enterprise</NavLink>
            </div>

            {renderedLinks}
            <button className="rounded-full p-2 m-2 hover:bg-slate-400" onClick={()=>setIsLight(!isLight)}>{isLight ? <MdDarkMode />: <MdLightMode />}</button>
        </nav >
    )
}

export default NavigationBar;