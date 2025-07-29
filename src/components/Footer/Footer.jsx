import './footer.scss'
export const Footer = () => {
  return (
    <footer className='footer'>
      <img className='footer__logo' src="./footer-logo.svg" alt="logo" /> 
      <div className='footer__socials'>
        <div className='footer__social-item'>
          <div className='social__circle'>
            <img src="./instagram.svg" alt="" />
            </div> 
          <a href="#instagram">Username</a>
        </div>
         <div className='footer__social-item'>
          <div className='social__circle'>
            <img src="./telegram.svg" alt="" />
            </div> 
          <a href="#telegram">Username</a>
        </div>
         <div className='footer__social-item'>
          <div className='social__circle'>
            <img src="./facebook.svg" alt="" />
            </div> 
          <a href="#facebook">Username</a>
        </div>
            <div className='footer__social-item'>
          <div className='social__circle'>
            <img src="./phone.svg" alt="" />
            </div> 
          <a href="#facebook">Username</a>
        </div>
               <div className='footer__social-item'>
          <div className='social__circle'>
            <img src="./message.svg" alt="" />
            </div> 
          <a href="#facebook">Username</a>
        </div>

      </div>
    </footer>
  )
}
