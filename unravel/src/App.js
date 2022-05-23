import Nav from "./containers/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import ProductPage from "./containers/ProductPage";
import Carousel, { CarouselItem } from "../src/components/Carousel/Carousel";

function App() {
	return (
		<BrowserRouter>
			<Nav />
			<div>
				<Carousel>
					<CarouselItem>Item 1</CarouselItem>
					<CarouselItem>Item 2</CarouselItem>
					<CarouselItem>Item 3</CarouselItem>
				</Carousel>
			</div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="productpage/:id" element={<ProductPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
