import { useEffect, useState } from 'react';
import './models.scss';

export const Models = ({ isInViewRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3, // настрой: 0.3 = 30% блока видно
      },
    );

    if (isInViewRef.current) {
      observer.observe(isInViewRef.current);
    }

    return () => {
      if (isInViewRef.current) {
        observer.unobserve(isInViewRef.current);
      }
    };
  }, [isInViewRef]);
  return (
    <div className="model">
      <div className={`model__wrapper ${isVisible ? '' : 'hidden-overflow'}`}>
        <div data-aos="zoom-out" className="model__item">
          <div>
            <img src="./model.png" alt="model" />
          </div>
        </div>
        <div data-aos="zoom-out" className="model__item">
          <div>
            <img src="./model2.png" alt="model" />
          </div>
          <div>
            <img src="./model3.png" alt="model" />
          </div>

          <div>
            <img src="./model4.png" alt="model" />
          </div>
          <div>
            <img src="./model5.png" alt="model" />
          </div>
        </div>
        <div data-aos="zoom-out" className="model__item">
          <img src="./model6.png" alt="model" />
        </div>
      </div>
      <div className="model__mobile">
        <div className="model__mobile-item">
          <img className="model__mobile-img" src="./model-mobile.png" alt="model-mobile" />
          <div>
            <img src="./model-mobile2.png" alt="model-mobile" />
            <img src="./model-mobile3.png" alt="model-mobile" />
          </div>
        </div>
        <div className="model__mobile-item">
          <img className="model__mobile-img" src="./model-mobile.png" alt="model-mobile" />
          <div>
            <img src="./model-mobile2.png" alt="model-mobile" />
            <img src="./model-mobile3.png" alt="model-mobile" />
          </div>
        </div>
      </div>
    </div>
  );
};
