import './App.css';
import Home from './component/Home.js/Home/Home';
import React from 'react';
import Product from './component/Product/Product';
import data from './data.json'
import Cart from './component/Cart/Cart';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
      products: data.products,
      size: '',
      short: ''
    }
  }
  createOrder = (order) => {
    alert("Need To Save Order For" + order.name)
  }
  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter(x => x._id !== product._id),
    });
    localStorage.setItem("cartItems", JSON.stringify(this.state.cartItems)); 
  };
  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach(item => {
      if(item._id === product._id){
        item.count++;
        alreadyInCart = true;
      }
    });
    if(!alreadyInCart){
      cartItems.push({...product, count: 1});
    }
    this.setState({cartItems})
   
  };
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">shopping-mart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Product products={this.state.products} addToCart={this.addToCart}></Product>
            </div>

            <div className="sidebar">
              <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} createOrder={this.createOrder}/>
              
            </div>
          </div>
        </main>
        <footer>All right reserved</footer>
      </div>
    );
  }
}

export default App;
