import React from "react";
import styled from "styled-components";
import Pagination from "react-js-pagination";
import Loading from "./layout/Loader/Loader";
import Product from "./Product";
import "./Products.css";

const GridView = ({
  loading,
  products,
  resultPerPage,
  setCurrentPageNo,
  count,
  productsCount,
  page,
  // maxPrice,
}) => {
  // console.log(
  //   products,

  //   setCurrentPageNo,
  //   count,
  //   resultPerPage,
  //   productsCount,
  //   page,
  //   maxPrice
  // );
  return (
    <Wrapper>
      {loading && (
        <div className="loading">
          <div></div>
        </div>
      )}
      {/* {products.length < 1 && (
        <h5 style={{ textTransform: "none" }}>
          Sorry, no products matched your search...
        </h5>
      )} */}

      <div className="products-container">
        {products?.map((product) => {
          return <Product key={product._id} {...product} />;
        })}
      </div>
      {parseInt(resultPerPage) < count && (
        <div className="paginationBox">
          <Pagination
            activePage={page}
            itemsCountPerPage={resultPerPage}
            totalItemsCount={productsCount}
            onChange={setCurrentPageNo}
            nextPageText="Next"
            prevPageText="Prev"
            firstPageText="1st"
            lastPageText="Last"
            itemClass="page-item"
            linkClass="page-link"
            activeClass="pageItemActive"
            activeLinkClass="pageLinkActive"
          />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .loading {
    width: 50vw;
    height: 50vh;
    background-color: white;
    display: grid;
    place-items: center;
    max-width: 100%;
  }

  .loading > div {
    width: 10vmax;
    height: 10vmax;
    border-bottom: 5px solid rgba(0, 0, 0, 0.719);

    border-radius: 50%;

    animation: loadingRotate 1000ms linear infinite;
  }

  @keyframes loadingRotate {
    to {
      transform: rotateZ(-360deg);
    }
  }
  img {
    height: 175px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default GridView;
