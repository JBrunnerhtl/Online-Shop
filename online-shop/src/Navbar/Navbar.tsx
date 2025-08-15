import style from "./navbar.module.css"
import PropTypes from "prop-types"
import { useState } from "react";

function Navbar(props: { items: { id: number, name: string, url: string }[] }) {
    const [showNav, setShowNav] = useState(true);
    const mobile: boolean = innerWidth < 768;
    const elements = props.items.map(item => <li key={item.id} className={style.liStyleInNav}><a href={item.url}
                                                                                                 className={style.aStyleInNav} >{item.name}</a>
    </li>);
    const navBar = <nav className={style.navStyle}>
                                <ul className={style.ulStyleInNav}>
                                    {elements}
                                </ul>
                            </nav>;

    return (
        mobile ? (
            <>
                <button type="button" onClick={() => setShowNav(!showNav)}>
                    Menü
                </button>
                {showNav ? navBar : null}
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