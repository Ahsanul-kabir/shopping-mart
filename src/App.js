import React from 'react';
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
