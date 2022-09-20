import React from "react";
import Header from "../parts/Header";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";
import Breadcrumb from "../components/Breadcrumb";
import ProductDetails from "../parts/Details/ProductDetails";
import Suggestion from "../parts/Details/Suggestion";

export default function HomePage() {
  return (
    <>
      <Header theme="black" position="relative" />

      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/021", name: "Office Room" },
          { url: "/categories/003/products/02", name: "Details" },
        ]}
      />
      <ProductDetails />
      <Suggestion />
      <Sitemap />
      <Footer />
    </>
  );
}
