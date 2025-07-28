
import './App.scss'
import { Collection } from './components/Collection/Collection'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Models } from './components/Models/Models'
import { Story } from './components/Story/Story'

function App() {


  return (
    <div className='wrapper'>
      <Header/> 
      <Hero/> 
      <Models/>
      <Story/>
      <Collection/>
    <Footer/>

  
    </div>
  )
}

export default App
