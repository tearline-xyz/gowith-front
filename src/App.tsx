import Banner from './components/banner'
import './App.css'
import ProductIntroduction from './components/products'
import Contact from './components/contact'
import Footer from './components/footer'
import { useEffect } from 'react'
import { initAnimation, initGsap } from './utils/animation'

const App = () => {
  useEffect(() => {
    initGsap()
    initAnimation()
  }, [])
  return (
    <div>
      <Banner />
      <ProductIntroduction />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
