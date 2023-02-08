import React from 'react';
import ReactDOM from 'react-dom';

const SearchBar = () => {
  return (
    <form>
      <input type="text" placeholder='search'/>
      <p>
        <input type="checkbox"/>
        <span> Show only products in stock</span>
      </p>
    </form>
  );
}

const FilterableProductTable = props => {
  const {products} = props;
  return (
    <div style={{fontFamily: "sans-serif"}}>
      <SearchBar />
      ProductTable
    </div>
  );
}

const PRODUCTS = [
  {
    category: "product-category",
    price: "$25.99",
    instock: true,
    name: "product-name"
  }
]

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById("root")
);
