import { useEffect, useRef } from 'react';
import './App.scss';
import { Collection } from './components/Collection/Collection';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Models } from './components/Models/Models';
import { Story } from './components/Story/Story';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDispatch, useSelector } from 'react-redux';
import { getGoodAPI } from './features/goods/thunk';

import { Route, Routes } from 'react-router-dom';
import Admin from './components/Admin/Admin';
import Authorization from './components/Authorization/Authorization';

function HomePage() {
  const data = useSelector((state) => state.goods.data);
  const newArray = Object.values(data);
  const modelsRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init();
    dispatch(getGoodAPI());
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <Hero />

      <div ref={modelsRef}>
        <Models isInViewRef={modelsRef} />
      </div>
      <Story />
      <Collection />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<Authorization />} />
      <Route path="/auth/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
