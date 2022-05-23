import { getAllMerinoWools } from "../../services/MerinoWools";
import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import styles from "./Home.module.scss";
import CarouselItem from "../../components/Carousel";
import Carousel from "../../components/Carousel";

const Home = () => {
	const [merinoWools, setMerinoWools] = useState([]);

	useEffect(() => {
		(async () => {
			setMerinoWools(await getAllMerinoWools());
		})();
	}, []);

	return (
		<div>
			<div>
				<Carousel>
					<CarouselItem>Item 1</CarouselItem>
					<CarouselItem>Item 2</CarouselItem>
					<CarouselItem>Item 3</CarouselItem>
				</Carousel>
			</div>
			<h2>Things you might like</h2>
			<div className={styles.HomeProducts}>
				{merinoWools.length &&
					merinoWools.map((merino, idx) => (
						<ProductCard key={idx} merino={merino} />
					))}
			</div>
		</div>
	);
};

export default Home;
