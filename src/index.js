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
  const {searchText, inStockOnly, products} = props;
  const rows = [];

  products.forEach(product => {
    if (product.name.indexOf(searchText) === -1) {
      return;
    }
    if (inStockOnly && !product.instock) {
      return;
    }
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

const SearchBar = props => {
  const {searchText, inStockOnly, onSearchTextChange, onInStockOnlyChange} = props;

  return (
    <form>
      <input type="text" placeholder='search' value={searchText} onChange={event => onSearchTextChange(event.target.value)}/>
      <p>
        <input type="checkbox" checked={inStockOnly} onChange={event => onInStockOnlyChange(event.target.checked)}/>
        <span> Show only products in stock</span>
      </p>
    </form>
  );
}

const FilterableProductTable = props => {
  const [searchText, setSearchText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const {products} = props;
  
  const handleSearchTextChange = searchText => {
    setSearchText(searchText);
  }

  const handleInStockOnlyChange = inStockOnly => {
    setInStockOnly(inStockOnly);
  }

  return (
    <div style={{fontFamily: "sans-serif"}}>
      <SearchBar searchText={searchText} inStockOnly={inStockOnly} 
      onSearchTextChange={handleSearchTextChange} onInStockOnlyChange={handleInStockOnlyChange}/>
      <ProductTable products={products} searchText={searchText} inStockOnly={inStockOnly} />
      
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
    category: "product-category-1",
    price: "$25.99",
    instock: false,
    name: "product-name-2"
  },
  {
    category: "product-category-2",
    price: "$25.99",
    instock: true,
    name: "product-name-3"
  },
  {
    category: "product-category-2",
    price: "$25.99",
    instock: false,
    name: "product-name-4"
  }
]

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById("root")
);
