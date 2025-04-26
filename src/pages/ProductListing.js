import plants from '../plantsData';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addToCart } from '../redux/cartSlice';

function ProductListing() {
  const dispatch = useDispatch();
  const [successMessage, setSuccessMessage] = useState('');

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
    setSuccessMessage(`${plant.name} added to cart!`);

    setTimeout(() => {
      setSuccessMessage('');
    }, 1500); // Message disappears after 1.5 seconds
  };

  return (
    <div className="product-list">
      {successMessage && (
        <div className="success-popup">
          {successMessage}
        </div>
      )}

      <h2 className="section-title">Aromatic Plants</h2>
      <div className="product-grid">
        {plants.filter(p => p.category === "Aromatic Plants").map(plant => (
          <div className="product-card" key={plant.id}>
            <img src={plant.image} alt={plant.name} />
            <div className="product-card-content">
              <h3 className="product-name">{plant.name}</h3>
              <p className="product-description">{plant.description}</p>
              <p className="product-price">${plant.price}</p>
              <button 
                className="add-to-cart-button" 
                onClick={() => handleAddToCart(plant)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-title">Medicinal Plants</h2>
      <div className="product-grid">
        {plants.filter(p => p.category === "Medicinal Plants").map(plant => (
          <div className="product-card" key={plant.id}>
            <img src={plant.image} alt={plant.name} />
            <div className="product-card-content">
              <h3 className="product-name">{plant.name}</h3>
              <p className="product-description">{plant.description}</p>
              <p className="product-price">${plant.price}</p>
              <button 
                className="add-to-cart-button" 
                onClick={() => handleAddToCart(plant)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListing;
