import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findByProductId } from "../../services/MerinoWools";
import one from "../../images/one.jpg";
import styles from "./ProductPage.module.scss";

// const ProductInfo = ({ product }) => {
// 	return (
// 		<div>
// 			<h3>{product.name}</h3>
// 			<img src={one} alt="" />
// 			<div className={styles.cardInfo}>
// 				<ul>
// 					<li>Colour: {product.colour}</li>
// 					<li>Ply: {product.ply}</li>
// 					<li>Price: ${product.pricePerUnit}</li>
// 					<li>Weight: {product.weight}g</li>
// 					<li>Needle Size: {product.needleSize}mm</li>
// 				</ul>
// 			</div>
// 		</div>
// 	);
// };

const ProductPage = () => {
	const [product, setProduct] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		(async () => {
			setProduct(await findByProductId(id));
		})();
	}, [id]);

	if (product) {
		return (
			<div className={styles.ProductPage}>
				<img src={one} alt="" />

				<div className={styles.ProductInfo}>
					<h2>{product.name}</h2>
					<ul>
						<li>Colour: {product.colour}</li>
						<li>Ply: {product.ply}</li>
						<li>Price: ${product.pricePerUnit}</li>
						<li>Weight: {product.weight}g</li>
						<li>Needle Size: {product.needleSize}mm</li>
					</ul>
				</div>
			</div>
		);
	} else {
		return <p>This product {id} does not exist</p>;
	}
};

export default ProductPage;
