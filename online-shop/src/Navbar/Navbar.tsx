import style from "./navbar.module.css"
import PropTypes from "prop-types"
import { useState, useEffect } from "react";

function Navbar(props: { items: { id: number, name: string, url: string }[] }) {
    const [showNav, setShowNav] = useState(false);
    const mobile: boolean = innerWidth < 768;
    const homeIcon = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fill="#fff" d="M12 3.172L19 10.172V20H5V10.172L12 3.172ZM12 1L2 11H5V21H19V11H22L12 1Z"/>
        </svg>
    );
    const exit = <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fill="#fff"
              d="M16.192 7.757a1 1 0 0 0-1.414-1.414L12 9.121 9.222 6.343a1 1 0 1 0-1.414 1.414L10.586 10.535l-2.778 2.778a1 1 0 1 0 1.414 1.414L12 11.949l2.778 2.778a1 1 0 0 0 1.414-1.414l-2.778-2.778 2.778-2.778z"/>
        <circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2" fill="none"/>
    </svg>

    const elements = props.items.map((item) => <li key={item.id}
                                                   className={mobile ? !showNav ? style.liStyleInNavFlyOut : style.liStyleInNavMobile : style.liStyleInNav}>
        <a href={item.url}
           className={style.aStyleInNav}>{item.name}</a>
    </li>);
    const navBar = <nav className={style.navStyle}>
        <ul className={`${style.ulStyleInNav} ${mobile ? showNav ? style.ulFlyIn : style.ulFlyOut: null}`}>
            {elements}
        </ul>
    </nav>;
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        if (showNav) {
            setIsVisible(true);
        } else if (isVisible) {
            const timer = setTimeout(() => setIsVisible(false), 1000); // Dauer der Animation
            return () => clearTimeout(timer);
        }
    }, [showNav, isVisible]);

    return (
        mobile ? (
            <>
                <div>
                <button type="button" className={style.buttonStyleForNavbar} onClick={() => {
                    setTimeout(() => setShowNav(prev => !prev), 100);

                }}>
                    {showNav ? exit : homeIcon}
                </button></div>
                {isVisible && navBar}
            </>
        ) : (
            navBar
        )
    );
}

Navbar.PropTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        url: PropTypes.string,
    }))
}
Navbar.defaultProps = {
    items: [],
}
export default Navbar;