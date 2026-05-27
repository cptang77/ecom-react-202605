import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Auth from './pages/Auth.jsx'
import Checkout from './pages/checkout.jsx'
// import Products from './pages/Products.jsx'
import Navbar from './components/Navbar.jsx'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/checkout' element={<Checkout />} />
        {/* <Route path='/products' element={Products} /> */}
      </Routes>
    </div>
  )
}

export default App
