import { Button } from '../../ui/Button/Button';
import './hero.scss';

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__wrapper">
        <h2>High fashion in every stitch</h2>
        <h1>SADRI - timeless dresses</h1>
        <h3>A story told with silk, tulle and embroidery.</h3>
        <Button className={'hero__btn'}>Create your own dress</Button>
      </div>
    </div>
  );
};
