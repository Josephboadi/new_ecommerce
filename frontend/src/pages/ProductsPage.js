import React, { useEffect, useState } from "react";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "react-js-pagination";
import styled from "styled-components";
import {
  Filters,
  ProductList,
  Sort,
  PageHero,
  Navbar,
  Footer,
} from "../components";
import { clearErrors, getRawProduct } from "../redux/actions/productAction";

const categories = [
  "Laptop",
  "Footwear",
  "Bottom",
  "Tops",
  "Attire",
  "Camera",
  "SmartPhones",
];

const ProductsPage = () => {
  const dispatch = useDispatch();

  const {
    rawProducts,
    allProducts,
    maxPrice,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.allProducts);

  const [page, setPage] = useState(1);
  const [price, setPrice] = useState(maxPrice ? maxPrice : 8000);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [sortName, setSortName] = useState("");
  const [sortPrice, setSortPrice] = useState("");
  const [grid_view, setGrid_view] = useState(true);

  const [ratings, setRatings] = useState(0);

  const setCurrentPageNo = (e) => {
    setPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  let count = filteredProductsCount;

  useEffect(() => {
    if (error) {
      // alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(
      getRawProduct(name, page, price, category, ratings, sortName, sortPrice)
    );
  }, [
    dispatch,

    name,
    page,
    price,
    category,
    ratings,
    sortName,
    sortPrice,
    error,
  ]);
  return (
    <main>
      <Navbar />
      <PageHero title="products" />
      <Wrapper className="page">
        <div className="section-center products">
          <Filters
            rawProducts={rawProducts}
            maxPrice={maxPrice}
            price={price}
            priceHandler={priceHandler}
            setPrice={setPrice}
            category={category}
            setCategory={setCategory}
            name={name}
            setName={setName}
            ratings={ratings}
            setRatings={setRatings}
          />
          <div>
            <Sort
              allProducts={allProducts}
              grid_view={grid_view}
              setGrid_view={setGrid_view}
              sortName={sortName}
              setSortName={setSortName}
              sortPrice={sortPrice}
              setSortPrice={setSortPrice}
            />

            <ProductList
              grid_view={grid_view}
              setGrid_view={setGrid_view}
              resultPerPage={resultPerPage}
              setCurrentPageNo={setCurrentPageNo}
              count={count}
              productsCount={productsCount}
              page={page}
              allProducts={allProducts}
              loading={loading}
              maxPrice={maxPrice}
            />
          </div>
        </div>
      </Wrapper>
      <Footer />
    </main>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ProductsPage;
