import './contact.scss';
import { Button } from '../../ui/Button/Button';
export const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__wrapper">
        <h3>Create your own unique look</h3>
        <h2>Contact Us</h2>
        <div className="line"></div>
        <h4>
          Leave a request and we'll be in touch to discuss <br /> the perfect dress designed just
          for you
        </h4>
        <form action="">
          <div>
            <img src="./user.svg" alt="user" />
            <input type="text" placeholder="Name" />
          </div>
          <div>
            <img src="./phone.svg" alt="user" />
            <input type="number" placeholder="Phone Number" />
          </div>
          <div>
            <img src="./mail.svg" alt="user" />
            <input type="email" placeholder="Mail" />
          </div>
          <div>
            <img src="./comment.svg" alt="user" />
            <textarea type="text" placeholder="Commentary" />
          </div>
          <Button className={'contact__btn'}>Send</Button>
        </form>
        <p className='contact__text'>
          We will contact you within 24 hours. All requests are processed individually.Your data
          will not be passed on to third parties.
        </p>
      </div>
    </div>
  );
};
