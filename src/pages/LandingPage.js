import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className='landing-page'>
      <h1>Welcome to Paradise Nursery</h1>
      <Link to="/products" style={{ textDecoration: 'none' }}>
        <button>Shop Now</button>
      </Link>
    </div>
  );
}

export default LandingPage;
