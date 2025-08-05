import './contact.scss';
import { Button } from '../../ui/Button/Button';
import { useState } from 'react';
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    comment: '',
  });

  const BOT_TOKEN = '8314598166:AAEXDbUCa3peaZeKh9IfL9qlR_o9fZ1V3eo';
  const CHAT_ID = '563246689';
  const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, phone, email, comment } = formData;
    const message = `
<b>Новая заявка с сайта</b>\n
<b>Имя:</b> ${name}
<b>Телефон:</b> ${phone}
<b>Email:</b> ${email}
<b>Комментарий:</b> ${comment}
  `;

    try {
      await fetch(TELEGRAM_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'HTML',
        }),
      });

      alert('Заявка успешно отправлена!');
      setFormData({ name: '', phone: '', email: '', comment: '' });
    } catch (error) {
      console.error('Ошибка при отправке:', error);
      alert('Произошла ошибка. Попробуйте позже.');
    }
  };

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

 
  return (
    <div id='contact' className="contact">
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
            <input
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              value={formData.name}
              type="text"
              placeholder="Name"
            />
          </div>
          <div>
            <img src="./phone.svg" alt="user" />
            <input
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              value={formData.phone}
              type="number"
              placeholder="Phone Number"
            />
          </div>
          <div>
            <img src="./mail.svg" alt="user" />
            <input
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              value={formData.email}
              type="email"
              placeholder="Mail"
            />
          </div>
          <div>
            <img src="./comment.svg" alt="user" />
            <textarea
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
              value={formData.comment}
              type="text"
              placeholder="Commentary"
            />
          </div>
          <Button onClick={handleSubmit} className={'contact__btn'}>Send</Button>
        </form>
        <p className="contact__text">
          We will contact you within 24 hours. All requests are processed individually.Your data
          will not be passed on to third parties.
        </p>
      </div>
    </div>
  );
};
