import { Button } from '../../ui/Button/Button';
import './header.scss';
export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <ul>
          <li>
            <a href="#collection">Collection</a>
          </li>
          <li>
            {' '}
            <a href="#about">About Us</a>
          </li>
           {/* <li>
            <a href="#collection">Admin</a>
          </li> */}
        </ul>
        <a href="/">
   <img src="./logo.png" alt="logo" />
        </a>
     
     <a href="#contact">
<Button className={'header__btn'}>Place An Order</Button>
     </a>
        
      </div>
    </header>
  );
};
