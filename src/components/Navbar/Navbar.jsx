import css from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <div className={`${css.navbar} ${css.navbarM}`}>
            <button>Logout</button>
        </div>
    );
}
export default Navbar;