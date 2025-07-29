import './collection.scss';
export const Collection = () => {
  return (
    <div className="collection">
      <div className="collection__wrapper">
        <h3>From Samarkand to New York</h3>
        <h2>from the new collection</h2>
        <div className="collection__items">
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
          <div className="collection__item">
            <img src="./collection.png" alt="collection" />
            <h5>Text Zagolovok</h5>
            <h4>Text Zagolovok</h4>
            <p>50$</p>
          </div>
        </div>
      </div>
    </div>
  );
};
