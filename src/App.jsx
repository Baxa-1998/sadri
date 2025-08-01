import { useEffect } from 'react';
import './App.scss';
import { Collection } from './components/Collection/Collection';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Models } from './components/Models/Models';
import { Story } from './components/Story/Story';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  });

  useEffect(() => {
    AOS.refresh();
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <Hero />
      <Models />
      <Story />
      <Collection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
