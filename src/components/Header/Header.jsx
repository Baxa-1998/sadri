import React from 'react'
import './header.scss'
export const Header = () => {
  return (
    <header className='header'>
      <div className='header__wrapper'> 
      <ul>
        <li>
          <a href="#collection">Collection</a>
          <a href="#collection">About Us</a>
        </li>
      </ul>
      </div>
    </header>
  )
}
