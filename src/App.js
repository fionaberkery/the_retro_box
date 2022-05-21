import React, { useState } from 'react'
import ToyList from './components/ToyList'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import WishList from './components/WishList'
import ShoppingBasket from './components/ShoppingBasket'
import Home from './components/Home'
import toys from './components/DummyData'
import Header from './components/Header'
import Footer from './components/Footer'
import './css/Home.css'
import './css/ToyDetail.css'
import './css/WishList.css'
import './css/ShoppingBasket.css'
import './css/ToyList.css'

const App = () => {

  const toyList = toys

  const [selectedToy, setSelectedToy] = useState(null)
  const [wishList, setWishList] = useState([])
  const [selectedWish, setSelectedWish] = useState(null)
  const [shoppingBasket, setShoppingBasket] = useState([])

  const onImageClick = (toy) => {
    setSelectedToy(toy)
  }

  const onWishListClick = (toy) => {
    const newWishlist = [...wishList, toy]
    setWishList(newWishlist)
}

const theWishList = wishList.map((item) => {
    return ( <p> {item} </p>)
})

const onGoBackClick = () => {
  setSelectedToy(null)
}

const onAddToBasketClick = (toy) => {
  const tempBasket = [...shoppingBasket, toy]
  setShoppingBasket(tempBasket)
}

const theShoppingBasket = shoppingBasket.map((item) => {
  return ( <p> {item} </p>)
})

  return (
    <>

      <Router>
        <Header/>
        
        
          <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/toys">      
            <ToyList onGoBackClick={onGoBackClick} toys={toys} onImageClick={onImageClick} selectedToy={selectedToy} onWishListClick={onWishListClick} wishList={wishList} onAddToBasketClick={onAddToBasketClick} />
          </Route>

          <Route path="/wishlist">
          <WishList theWishList={theWishList} />
          </Route>

          <Route path="/basket">
            <ShoppingBasket theShoppingBasket={theShoppingBasket} />
          </Route>
          
          </Switch>
        
        <Footer/>
      </Router>
    </>
  )
}

export default App
