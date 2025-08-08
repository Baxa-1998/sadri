import { useEffect, useState } from 'react';
import './collection.scss';

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

const collections2 = [
  {
    images: ['./collection/16.png', './collection/17.png', './collection/18.png'],
    title: 'Green dress',
    price: '$550',
  },
  {
    images: ['./collection/19.png', './collection/20.png', './collection/21.png'],
    title: 'Pink Dress',
    price: '$500',
  },
  {
    images: ['./collection/22.png', './collection/23.png', './collection/24.png'],
    title: 'Corset',
    price: '$200',
  },
  {
    images: ['./collection/25.png', './collection/26.png', './collection/27.png'],
    title: 'Corset',
    price: '$200',
  },
  {
    images: ['./collection/28.png', './collection/29.png', './collection/30.png'],
    title: 'Corset',
    price: '$200',
  },
];

export const Collection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeCollection, setActiveCollection] = useState(null); // "col1" или "col2"

  useEffect(() => {
    document.body.style.overflow = hoveredIndex !== null ? 'hidden' : 'unset';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setHoveredIndex(null);
        setActiveCollection(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [hoveredIndex]);

  // Выбираем массив данных для оверлея
  const currentCollection =
    activeCollection === 'col1' ? collections : activeCollection === 'col2' ? collections2 : [];

  return (
    <>
     {hoveredIndex !== null && (
  <div className="overlay" onClick={() => { setHoveredIndex(null); setActiveCollection(null); }}>
    <div className="overlay__content" onClick={(e) => e.stopPropagation()}>

      <div className="overlay__images">
        <div className="overlay__images-main">
          <img src={currentCollection[hoveredIndex]?.images[0]} alt="main" />
        </div>
        <div className="overlay__images-secondary">
          <img src={currentCollection[hoveredIndex]?.images[1]} alt="secondary1" />
          <img src={currentCollection[hoveredIndex]?.images[2]} alt="secondary2" />
        </div>
      </div>
      <div className='overlay__info'>
  <h4>{currentCollection[hoveredIndex]?.title}</h4>
      <p>{currentCollection[hoveredIndex]?.price}</p>
      </div>
    
    </div>
  </div>
)}

      <div id="collection" data-aos="fade-up" className="collection">
        <div className="collection__wrapper">
          <h3>From Samarkand to New York</h3>
          <h2>from the new collection</h2>

          {/* Первая коллекция */}
          <div className="collection__items">
            {collections.map((item, i) => (
              <div
                key={i}
                onClick={() => { setHoveredIndex(i); setActiveCollection('col1'); }}
                className="collection__item"
              >
                <div className="collection__images">
                  <div className="collection__images-main">
                    <img src={item.images[0]} alt={`main-${i}`} />
                  </div>
                  <div className="collection__images-secondary">
                    <img src={item.images[1]} alt={`secondary1-${i}`} />
                    <img src={item.images[2]} alt={`secondary2-${i}`} />
                  </div>
                </div>
                <h4>{item.title}</h4>
                <p>{item.price}</p>
              </div>
            ))}
          </div>

          {/* Вторая коллекция */}
          <div className="collection__items">
            {collections2.map((item, i) => (
              <div
                key={i}
                onClick={() => { setHoveredIndex(i); setActiveCollection('col2'); }}
                className="collection__item"
              >
                <div className="collection__images">
                  <div className="collection__images-main">
                    <img src={item.images[0]} alt={`main-${i}`} />
                  </div>
                  <div className="collection__images-secondary">
                    <img src={item.images[1]} alt={`secondary1-${i}`} />
                    <img src={item.images[2]} alt={`secondary2-${i}`} />
                  </div>
                </div>
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