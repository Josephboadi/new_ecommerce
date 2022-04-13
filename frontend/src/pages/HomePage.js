import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import Carousel from 'react-material-ui-carousel';
import {
  FeaturedProducts,
  Hero,
  Services,
  Contact,
  Navbar,
  Footer,
} from "../components";
import { getRawProduct } from "../redux/actions/productAction";
const HomePage = () => {
  const dispatch = useDispatch();
  const { loading, error, allProducts, maxPrice } = useSelector(
    (state) => state.allProducts
  );

  const [page, setPage] = useState(1);
  const [price, setPrice] = useState(maxPrice ? maxPrice : 25000);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [sortName, setSortName] = useState("");
  const [sortPrice, setSortPrice] = useState("");

  const [ratings, setRatings] = useState(0);

  // console.log(allProducts);

  useEffect(() => {
    dispatch(
      getRawProduct(name, page, price, category, ratings, sortName, sortPrice)
    );
  }, []);
  return (
    <main>
      <Navbar />
      {/* <Carousel> */}
      <Hero />
      {/* <Hero /> */}
      {/* </Carousel> */}
      <FeaturedProducts data={allProducts} />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
};

export default HomePage;
