import React from 'react';
import Filter from './component/Filter/Filter';
import Product from './component/Product/Product';
import data from './data.json';
import store from "./store.js";
import { Provider } from "react-redux";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: '',
      short: ''
    }
  }
  sortProducts=(event) => {
    const sort = event.target.value;
    console.log(event.target.value);
    this.setState((state) => ({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price < b.price
              ? 1
              : -1
            : sort === "highest"
              ? a.price > b.price
                ? 1
                : -1
              : a._id > b._id
                ? 1
                : -1
        ),
    }));
  };

  filterProducts(event) {
    console.log(event.target.value)
    if (event.target.value === "") {
      this.state({ size: event.target.value, product: data.products })
    }
    else {
      this.setState({
        size: event.target.value,
        products: data.products.filter((product) => product.availableSizes.indexOf(event.target.value) >= 0)
      })
    }
  }
  render() {
    
    return (
      <Provider store={store}>
      <div className="grid-container">
        <header>
          <a href="/">shopping-mart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              />
              <Product products={this.state.products}></Product>
            </div>

            <div className="sidebar">
              Cart Items
            </div>

          </div>

        </main>
        <footer>All right reserved</footer>
      </div>
      </Provider>
    );
  }


}

export default App;
