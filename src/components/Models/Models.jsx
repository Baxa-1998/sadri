import './models.scss';

export const Models = () => {
  return <div className="model">
    <div className='model__wrapper'>
    <div className='model__item'>
        <img src="./model.png" alt="model" />
      </div> 
      <div className='model__item'>
            <img src="./model2.png" alt="model" />
            <img src="./model3.png" alt="model" />
            <img src="./model4.png" alt="model" />
            <img src="./model5.png" alt="model" />
      </div>
      <div className='model__item'>
            <img src="./model6.png" alt="model" />
      </div>
    </div>
    <div className='model__mobile'>
    <div className='model__mobile-item'>
    <img className='model__mobile-img' src="./model-mobile.png" alt="model-mobile" />
    <div>
    <img src="./model-mobile2.png" alt="model-mobile" />
    <img src="./model-mobile3.png" alt="model-mobile" />
    </div>
    </div>
      <div className='model__mobile-item'>
    <img className='model__mobile-img' src="./model-mobile.png" alt="model-mobile" />
    <div>
    <img src="./model-mobile2.png" alt="model-mobile" />
    <img src="./model-mobile3.png" alt="model-mobile" />
    </div>
    </div>
    </div>
    
  </div>;
};
