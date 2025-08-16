import style from "./navbar.module.css"
import PropTypes from "prop-types"
import { useState, useEffect } from "react";

function Navbar(props: { items: { id: number, name: string, url: string }[] }) {
    const [showNav, setShowNav] = useState(false);
    const mobile: boolean = innerWidth < 768;
    const elements = props.items.map((item) => <li key={item.id} className = {mobile ? !showNav ? style.liStyleInNavFlyOut: style.liStyleInNavMobile: style.liStyleInNav}><a href={item.url}
                                                                                                 className={style.aStyleInNav} >{item.name}</a>
    </li>);
    const navBar = <nav className={style.navStyle}>
                                <ul className={style.ulStyleInNav}>
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
                <button type="button" onClick={() =>
                {
                    setTimeout(() => setShowNav(prev => !prev), 100);
                }}>
                    Menü
                </button>
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