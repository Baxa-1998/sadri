import './contact.scss';

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
          <input type="text" placeholder="Name" />
          <input type="number" placeholder="Phone Number" />
          <input type="email" placeholder="Mail" />
          <input type="text" placeholder="Commentary" />
        </form>
      </div>
    </div>
  );
};
