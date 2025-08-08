import './footer.scss'
export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__logo'>
      <img  src="./footer-logo.svg" alt="logo" /> 
      </div>

      <div className='footer__socials'>
        <div className='footer__social-item'>
          <div className='social__circle'>
            <img src="./instagram.svg" alt="" />
            </div> 
          <a href="https://www.instagram.com/sadricouture/?igsh=MW5sOTI3aGViMHBtcQ%3D%3D&utm_source=qr#">Sadri</a>
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
            <img src="./phone.svg" alt="phone" />
            </div> 
          <a href="tel:+1(347)-981-1240 ">Username</a>
        </div>
               <div className='footer__social-item'>
          <div className='social__circle'>
            <img src="./message.svg" alt="" />
            </div> 
          <a href="mailto:sadricouture@gmail.com">sadricouture@gmail.com</a>
        </div>

      </div>
    </footer>
  )
}
