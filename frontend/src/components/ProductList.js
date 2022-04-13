import React from "react";
import Loading from "./layout/Loader/Loader";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = ({
  grid_view,
  setGrid_view,
  resultPerPage,
  setCurrentPageNo,
  count,
  productsCount,
  page,
  allProducts,
  loading,
}) => {
  // const { filtered_products: products, grid_view } = useFilterContext();

  if (grid_view === false) {
    return (
      <ListView
        loading={loading}
        products={allProducts}
        setCurrentPageNo={setCurrentPageNo}
        count={count}
        productsCount={productsCount}
        page={page}
        resultPerPage={resultPerPage}
      />
    );
  }
  return (
    <GridView
      loading={loading}
      products={allProducts}
      setCurrentPageNo={setCurrentPageNo}
      count={count}
      productsCount={productsCount}
      page={page}
      resultPerPage={resultPerPage}
    >
      product list
    </GridView>
  );
};

export default ProductList;
