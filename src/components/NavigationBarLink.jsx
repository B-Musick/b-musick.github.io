import { NavLink } from "react-router-dom"
import { useRef } from "react";

function NavigationBarLink({link, classes, activeFunction}) {
    const navLinkClasses = "flex px-4 py-2 font-bold hover:text-slate-500 rounded-full";

    const focusButton = () => {
        if(activeFunction) activeFunction(link.path);
    }

    return (
        <>
            <NavLink key={link.label} onClick={focusButton} to={link.path} className={({ isActive }) =>
                isActive ? `${classes} ${navLinkClasses} bg-sky-900/50` : `${classes} ${navLinkClasses}`
            }>
                {link.label}
            </NavLink>
        </>
    )
}

export default NavigationBarLink;