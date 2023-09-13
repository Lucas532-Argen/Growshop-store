import NavBar from './components/NavBar'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart'
import Home from './components/Home'
import ShoppingCartContext from './context/ShoppingCartContext'
import Checkout from './components/Checkout'

const App = () => {
    return (
    <BrowserRouter>
       <ShoppingCartContext>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/category/:category' element={<ItemListContainer />} />
          <Route exact path='/item/:id' element={<ItemDetailContainer />} />
          <Route exact path='/checkout' element={<Checkout />} />
        </Routes>
      </ShoppingCartContext>
    </BrowserRouter>
  )
}

export default App