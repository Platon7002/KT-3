
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating/Rating';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка загрузки');
        }
        return response.json();
      })
      .then(data => setProducts(data))
      .catch(() => setError('Не удалось загрузить товары'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="message">Загрузка товаров...</p>;
  if (error) return <p className="message">{error}</p>;

  return (
    <div className="products-page">
      <div className="products-grid">
        {products.map(product => (
          <Link
            to={`/product/${product.id}`}
            className="product-card"
            key={product.id}
          >
            <h3>{product.title}</h3>
            <Rating rating={product.rating.rate} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
