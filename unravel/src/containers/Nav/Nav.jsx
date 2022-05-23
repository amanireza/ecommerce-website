import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<div className={styles.Nav}>
			<div className={styles.HomeLogo}>
				<Link to="/">Unravel</Link>
			</div>
			<div className={styles.NavGroup}>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
				<Link className={styles.Shop} to="/">
					Shop
				</Link>
			</div>
		</div>
	);
};

export default Nav;
