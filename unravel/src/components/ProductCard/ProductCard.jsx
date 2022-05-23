import styles from "./ProductCard.module.scss";
import one from "../../images/one.jpg";
import { Link } from "react-router-dom";

const ProductCard = ({ merino }) => {
	const x = "productpage/";
	const productLink = x.concat(merino.id);

	return (
		<div className={styles.ProductCard}>
			<Link to={productLink}>
				<img src={one} alt="" />
			</Link>
			<h3>{merino.name}</h3>
			<div className={styles.cardInfo}>
				<ul>
					<li>Colour: {merino.colour}</li>
					<li>Ply: {merino.ply}</li>
					<li>Price: ${merino.pricePerUnit}</li>
					<li>Weight: {merino.weight}g</li>
					<li>Needle Size: {merino.needleSize}mm</li>
				</ul>
			</div>
		</div>
	);
};

export default ProductCard;
