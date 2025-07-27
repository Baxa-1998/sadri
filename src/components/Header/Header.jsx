
import { Button } from '../../ui/Button/Button'
import './header.scss'
export const Header = () => {
  return (
    <header className='header'>
      <div className='header__wrapper'> 
      <ul>
        <li>
          <a href="#collection">Collection</a>
        
        </li>
        <li>  <a href="#collection">About Us</a></li>
      </ul>
      <img src="./logo.png" alt="logo" />
      <Button className={'header__btn'}>Place An Order</Button>
      </div>
    </header>
  )
}
