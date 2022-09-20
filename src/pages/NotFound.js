import React from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import Breadcrumb from "../components/Breadcrumb";
import Sitemap from "../parts/Sitemap";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";
import PageErrorMessage from "../parts/PageErrorMessage";

// import ShoppingCart from "../parts/Cart/ShoppingCart"
// import ShippingDetails from "../parts/Cart/ShippingDetails"

export default function NotFound() {
  return (
    <>
      <Header theme="black" position="relative" />

      <PageErrorMessage/>

      <Sitemap />
      <Footer />
    </>
  );
}
