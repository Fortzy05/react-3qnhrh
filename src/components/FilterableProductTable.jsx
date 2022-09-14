import React from "react";
import SearchBar from "../components/SearchBar"
import ProductTable from "../components/ProductTable"
const FilterableProductTable = ({ products }) => {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

export default FilterableProductTable;