import styles from "./Carousel.module.scss";
import React from "react";

export const CarouselItem = ({ children, width }) => {
	return (
		<div className={styles.carouselItem} style={{ width: width }}>
			{children}
		</div>
	);
};

const Carousel = ({ children }) => {
	return (
		<div className={styles.carousel}>
			<div
				className={styles.inner}
				style={{ transform: "translateX(-0%)" }}
			>
				{React.Children.map(children, (child, index) => {
					React.cloneElement(child, { width: "100%" });
				})}
			</div>
		</div>
	);
};

export default Carousel;
