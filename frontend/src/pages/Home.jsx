import { useState } from "react";
import API from "../../api"
// import SearchBar from "./components/SearchBar";
import SearchBar from "../components/SearchBar";
// import ProductList from "./components/ProductList";
import ProductList from "../components/ProductList";

export default function Home() {
  const [products, setProducts] = useState([]);

  const search = async (text) => {
    const res = await API.get(`/products/search?name=${text}`);
    setProducts(res.data);
  };

  return (
    <div>
      <h1>Retail Price Comparison</h1>
      <SearchBar onSearch={search} />
      <ProductList products={products} />
    </div>
  );
}
