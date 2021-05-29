import React, { Component } from 'react';
import formatCurrency from '../../util';
import cart from 'react-reveal/Fade';
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            address: "",
            showCheckout: false
        };
    }
    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        createOrder = e => {
            e.preventDefault();
            const order = {
                name: this.state.name,
                email: this.state.email,
                address: this.state.address,
                cartItems: this.props.cartItems
            };
            this.props.createOrder(order);
        };
        const { cartItems } = this.props;
        return (
            <div>
                {
                    cartItems.length === 0 ? (<div className="cart cart-header">cart is empty</div>
                    ) : (
                        <div className="cart cart-header">you have {cartItems.length} in the cart</div>
                    )}
                <div className="cart">
                    <Fade left cascade={true}>
                        <ul className="cart-items">
                            {
                                cartItems.map(item => (
                                    <li key={item._id}>
                                        <div>
                                            <img src={item.image} alt={item.title} />
                                        </div>
                                        <div>
                                            <div>{item.title}</div>
                                            <div className="right">
                                                {formatCurrency(item.price) x {item.count} {" "}}
                                            <button className="button" onClick={() => this.props.removeFromCart(item)}>Remove</button>
                                            </div>

                                        </div>
                                    </li>
                                ))}
                        </ul>
                    </Fade>
                </div>
                <div>
                    {cartItems.length !== 0 && (
                        <div className="cart">
                            <div className="total">
                                <div>
                                    Total:{" "}
                                    {formatCurrency(
                                        cartItems.reduce((a, c) => a + c.price * c.count, 0)
                                    )}
                                </div>
                                <button
                                    onClick={() => {
                                        this.setState({ showCheckout: true });
                                    }} className="primary">Procced</button>
                            </div>
                        </div>

                    )}
                </div>
                <div>
                    {this.state.showCheckout && (
                        <Fade right cascade={true}>
                            <div className="cart">
                                <form onSubmit={this.createOrder}>
                                    <ul className="form-container">
                                        <li>
                                            <label>Email</label>
                                            <input name="email" type="email" onChange={this.handleInput} required />
                                        </li>
                                        <li>
                                            <label>Name</label>
                                            <input name="name" type="name" onChange={this.handleInput} required />
                                        </li>
                                        <li>
                                            <label>Address</label>
                                            <input name="address" type="text" onChange={this.handleInput} required />
                                        </li>
                                        <li>
                                            <button className="button primary" type="submit">Checkout</button>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </Fade>
                    )
                    }
                </div>
            </div>
        );
    }
}

export default Cart;
