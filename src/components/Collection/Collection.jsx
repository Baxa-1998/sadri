import { useEffect, useState } from 'react';
import './collection.scss';
const images = ['./collection.png', './collection.png', './collection.png'];
export const Collection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    if (hoveredIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setHoveredIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [hoveredIndex]);

  return (
    <>
      {hoveredIndex !== null && (
        <div className="overlay" onClick={() => setHoveredIndex(null)}>
          <img src={images[hoveredIndex]} alt="zoomed" className="overlay__image" />
        </div>
      )}
      <div className="collection">
        <div className="collection__wrapper">
          <h3>From Samarkand to New York</h3>
          <h2>from the new collection</h2>
          <div className="collection__items">
            {images.map((src, i) => (
              <div
                key={i}
                onClick={() => setHoveredIndex(i)} // Используем клик, не ховер
                className="collection__item">
                <img src={src} alt={`collection-${i}`} />
                <h5>Text Zagolovok</h5>
                <h4>Text Zagolovok</h4>
                <p>50$</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
