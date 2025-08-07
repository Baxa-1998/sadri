import { useEffect, useState } from 'react';
import './collection.scss';
const images = ['./collection.png', './collection.png', './collection.png'];
const collections = [
  {
    images: ['./collection/1.png', './collection/2.png', './collection/3.png'],
    title: 'Wedding dress',
    price: '$1200 - $5000',
  },
  {
    images: ['./collection/4.png', './collection/5.png', './collection/6.png'],
    title: 'Mayinoya',
    price: '$600',
  },
  {
    images: ['./collection/7.png', './collection/8.png', './collection/9.png'],
    title: 'Red dress',
    price: '$800',
  },
   {
    images: ['./collection/10.png', './collection/11.png', './collection/12.png'],
    title: 'Corset',
    price: '$200',
  },
     {
    images: ['./collection/13.png', './collection/14.png', './collection/15.png'],
    title: 'Corset',
    price: '$200',
  },
];

export const Collection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    document.body.style.overflow = hoveredIndex !== null ? 'hidden' : 'unset';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setHoveredIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [hoveredIndex]);

  return (
    <>
      {hoveredIndex !== null && (
        <div className="overlay" onClick={() => setHoveredIndex(null)}>
          <div className="overlay__content" onClick={(e) => e.stopPropagation()}>
            {collections[hoveredIndex].images.map((img, idx) => (
              <img key={idx} src={img} alt={`zoom-${idx}`} />
            ))}
            <h5>{collections[hoveredIndex].subtitle}</h5>
            <h4>{collections[hoveredIndex].title}</h4>
            <p>{collections[hoveredIndex].price}</p>
          </div>
        </div>
      )}

      <div id="collection" data-aos="fade-up" className="collection">
        <div className="collection__wrapper">
          <h3>From Samarkand to New York</h3>
          <h2>from the new collection</h2>
          <div className="collection__items">
            {collections.map((item, i) => (
              <div key={i} onClick={() => setHoveredIndex(i)} className="collection__item">
              <div className="collection__images">
  <div className="collection__images-main">
    <img src={item.images[0]} alt={`main-${i}`} />
  </div>
  <div className="collection__images-secondary">
    <img src={item.images[1]} alt={`secondary1-${i}`} />
    <img src={item.images[2]} alt={`secondary2-${i}`} />
  </div>
</div>
                <h5>{item.subtitle}</h5>
                <h4>{item.title}</h4>
                <p>{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
