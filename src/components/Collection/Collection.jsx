import { useEffect, useState } from 'react';
import './collection.scss';
export const Collection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {isHovered && <div className="overlay" />}
      <div className="collection">
        <div data-aos="fade-up" className="collection__wrapper">
          <h3>From Samarkand to New York</h3>
          <h2>from the new collection</h2>
          <div className="collection__items">
            <div
                    onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
            className="collection__item">
              <img src="./collection.png" alt="collection" />
              <h5>Text Zagolovok</h5>
              <h4>Text Zagolovok</h4>
              <p>50$</p>
            </div>
            <div className="collection__item">
              <img src="./collection.png" alt="collection" />
              <h5>Text Zagolovok</h5>
              <h4>Text Zagolovok</h4>
              <p>50$</p>
            </div>
            <div className="collection__item">
              <img src="./collection.png" alt="collection" />
              <h5>Text Zagolovok</h5>
              <h4>Text Zagolovok</h4>
              <p>50$</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
