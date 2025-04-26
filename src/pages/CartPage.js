import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

function CartPage() {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
        <div className="cart-page">
          <h1 className="cart-title">Your Cart</h1>
    
          <div className="cart-items">
            {cartItems.length === 0 ? (
              <p className="empty-cart">Your cart is empty!</p>
            ) : (
              cartItems.map(item => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>Unit Price: ${item.price.toFixed(2)}</p>
                    <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                    
                    <div className="cart-item-actions">
                      <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                      <span className="quantity">{item.quantity}</span>
                      <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                      <button 
                        className="delete-button"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
    
          {cartItems.length > 0 && (
            <div className="cart-summary">
              <h2 className="cart-total">Total: ${totalPrice.toFixed(2)}</h2>
    
              <div className="cart-buttons">
                <Link to="/products" style={{ textDecoration: 'none' }}>
                  <button className="continue-shopping">Continue Shopping</button>
                </Link>
                <button className="checkout-button">Checkout</button>
              </div>
            </div>
          )}
        </div>
      );
    }

export default CartPage;


