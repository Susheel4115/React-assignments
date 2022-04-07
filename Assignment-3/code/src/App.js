import React from "react";
import Header from "./components/Header";
import "./App.css";
import CustomerInfo from "./components/CustomerInfo";
import Orderinfo from "./components/Orderinfo";
import ProductList from "./components/ProductList";

var arrow = "<";
var image = "https://www.w3schools.com/howto/img_avatar.png";
function App() {
  return (
    <div className="site-container">
      {/* Start Your code here */}
      <Header arrow={arrow} name="Susheel kumar" />
      <CustomerInfo />
      <Orderinfo />
      <ProductList image={image} />
    </div>
  );
}

export default App;
