import { Button } from '../../ui/Button/Button';
import './hero.scss';

export const Hero = () => {
  return (
    <div className="hero">
      <div data-aos="fade-right" data-aos-delay="1000" className="hero__wrapper">
        <h2 >High fashion in every stitch</h2>
        <h1>SADRI - couture made</h1>
        <h3>A story told with silk, tulle and embroidery.</h3>
        <a href="#contact">
  <Button className={'hero__btn'}>Create your own dress</Button>
        </a>
      
      </div>
    </div>
  );
};
