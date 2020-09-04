import React, { Component } from "react";
import { connect } from "react-redux";
import util from "../util";
import { addToCart } from "../actions/cartActions";
import { fetchProducts } from "../actions/productActions";
class Products extends Component {
    componentDidMount() {
        this.props.fetchProducts();
    }
    render() {
        const productItems = this.props.products.map((product) => (
            <div className="col-md-4" key={product.id}>
                <div className="bg text-center">
                    <a
                        href={`#${product.id}`}
                        onClick={(e) => this.props.addToCart(this.props.cartItems, product)}
                    >
                        <img src={`products/${product.sku}_2.jpg`} alt={product.title} />
                        <p style={{ color: "black" }}>{product.title}</p>
                    </a>
                    <b>{util.formatCurrency(product.price)}</b>
                    <button
                        className="btn1 btn-primary"
                        // onClick={(e) => this.props.handleAddToCart(e, product)}
                        onClick={(e) => this.props.addToCart(this.props.cartItems, product)}

                    >
                        Add to cart
          </button>
                </div>
            </div>
        ));

        return <div className="row">{productItems}</div>;
    }
}
const mapStateToProps = (state) => ({
    products: state.products.filteredItems,
    cartItems: state.cart.items,
});
export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);
