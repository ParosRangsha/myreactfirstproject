import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/components/header/Header';
import Banner from './assets/components/banner/Banner';
import Product from './assets/components/products/Product';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner />
      <Product />
    </>
  )
}

export default App
