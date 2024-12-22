import { useEffect, useState } from "react";
import CarouselComponent from "../Carousel/Carousel";
import Header from "../Header/Header";
import LandingMain from "../LandingMain/LandingMain";
import axios from "axios";
function LandingPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <>
      <Header />
      <CarouselComponent />
      <LandingMain products={products} />
    </>
  );
}
export default LandingPage;
