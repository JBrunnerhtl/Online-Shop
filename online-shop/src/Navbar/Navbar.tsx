import style from "./navbar.module.css"
import PropTypes from "prop-types"

function Navbar(props) {
    const elements = props.items.map(item => <li key={item.id}><a href={item.url}>{item.name}</a></li>)
    return (
        <nav>
            <ul>
                {elements}
            </ul>
        </nav>
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