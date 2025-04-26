import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../assets/images/logo (2).png'; // make sure you have a logo in /src/assets/logo.png

function Navbar() {
  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    <nav>
      <div className="nav-left">
        <img src={logo} alt="Paradise Nursery" className="logo" />
      </div>
      <div className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </div>
    </nav>
  );
}

export default Navbar;
