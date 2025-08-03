import { Button } from '../../ui/Button/Button';
import './story.scss';

export const Story = () => {
  return (
    <div id='about' className="story">
      <div className='text__mobile'>
         <h3>From Samarkand to New York</h3>
          <h2>A story embroidered with the threads of two cultures</h2>
          <div className="line"></div>
      </div>
      <div data-aos="fade-up" className="story__wrapper">
        <div className="story__text">
          <h3>From Samarkand to New York</h3>
          <h2>A story embroidered with the threads of two cultures</h2>
          <div className="line"></div>
          <p>
            Sadri Couture is a New York–based fashion house where <br /> timeless elegance meets
            artisanal craftsmanship. The brand blends contemporary silhouettes with the rich <br />{' '}
            cultural heritage of Samarkand, infusing each piece <br /> with stories, symbolism, and
            soul. <br /> <br />
            Known for its intricate detailing, hand-embroidery, <br /> and masterful fabric
            manipulation, Sadri Couture <br />
            celebrates femininity through flowing forms, <br /> corseted shapes, and
            heritage-inspired designs. Every <br /> garment is thoughtfully crafted, often from
            scratch, with a deep focus on quality, fit, and individuality. <br /> <br /> From runway
            moments to bespoke pieces, Sadri Couture <br /> is not just fashion—it’s a movement that
            honors <br /> heritage, empowers women, and turns tradition into <br /> art.
          </p>
          <form action="">
            <input type="number" placeholder="+1 000 000 00 00" required />
            <Button className={'story__btn'}>Contact Us</Button>
          </form>
        </div>
        <div className='story__img'>
          
        </div>
 
       
      
      </div>
         <form className='mobile-form' action="">
            <input type="number" placeholder="+1 000 000 00 00" required />
            <Button className={'story__btn'}>Contact Us</Button>
          </form>
    </div>
  );
};
