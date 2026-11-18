
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Rating from '../components/Rating/Rating';

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка загрузки');
        }
        return response.json();
      })
      .then(data => {
        if (!data || !data.id) {
          setError('Товар не найден');
        } else {
          setProduct(data);
        }
      })
      .catch(() => setError('Не удалось загрузить товар'))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="message">Загрузка товара...</p>;
  if (error) return <p className="message">{error}</p>;

  return (
    <div className="product-page">
      <div className="product-details">
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} />
        <p>Price: {product.price} $</p>
        <p>Description: {product.description}</p>
        <Rating rating={product.rating.rate} />
      </div>

      <button className="back-button" onClick={() => navigate(-1)}>
        НАЗАД
      </button>
    </div>
  );
}

export default ProductPage;
