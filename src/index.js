import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const ProductRow = props => {
  const {product} = props;
  const availability = product.instock ? "Available" : "Not Available"
  return (
    <tr>
      <td>{product.name}</td>
      <td align='right'>{product.price}</td>
      <td align='right'>{availability}</td>
    </tr>
  );
}

const ProductTable = props => {
  const {products} = props;
  const rows = [];

  products.forEach(product => {
    rows.push(<ProductRow product={product} key={product.name}/>);
  });

  return (
    <table width="100%">
      <thead>
        <tr>
          <th align='left'>Name</th>
          <th align='right'>Price</th>
          <th align='right'>Availability</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}

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
  console.log("productsJson");
  return (
    <div style={{fontFamily: "sans-serif"}}>
      <SearchBar />
      <ProductTable products={products} />
      
    </div>
  );
}

// const [data, setdata] = useState([]);

// fetch('https://dummyjson.com/products')
// .then(res => res.json()).then(json => setdata(json))

const PRODUCTS = [
  {
    category: "product-category-1",
    price: "$25.99",
    instock: true,
    name: "product-name-1"
  },
  {
    category: "product-category-2",
    price: "$25.99",
    instock: true,
    name: "product-name-2"
  }
]

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById("root")
);
