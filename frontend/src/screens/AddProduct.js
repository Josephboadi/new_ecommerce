import React from "react";
import Sidebar from "./../components/sidebar1";
import Header from "./../components/Header";
import AddProductMain from "./../components/products/AddProductMain";

const AddProduct = () => {
  return (
    <>
      <Sidebar />
      <main className='main-wrap'>
        <Header />
        <AddProductMain />
      </main>
    </>
  );
};

export default AddProduct;
