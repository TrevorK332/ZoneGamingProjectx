import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import Products from "./components/Products.jsx";
import Details from "./components/Details.jsx";
import Navigation from "./components/Navigation.jsx";
import Games from "./components/Games.jsx";
import Contact from "./components/Contact.jsx";
import Help from "./components/Help.jsx";
import Categories from "./components/Categories.jsx";
import Adventure from "./components/Adventure.jsx";
import Category01 from "./components/Category01.jsx";
import Detail01 from "./components/Detail01.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Strategy from "./components/Strategy.jsx";
import Action from "./components/Action.jsx";
import Detailadv from "./components/Detailsadv.jsx";
import Detailsstr from "./components/Detailsstr.jsx";
//
function App() {


  return (
    <>
          <BrowserRouter>
              <ScrollToTop/>
              <Navigation/>
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/products" element={<Products/>}></Route>
              <Route path="/games" element={<Games/>}></Route>
              <Route path="/product" element={<Detail01/>}></Route>
              <Route path="/productadv" element={<Detailadv/>}></Route>
              <Route path="/productstr" element={<Detailsstr/>}></Route>
              <Route path="/contact" element={<Contact/>}></Route>
              <Route path="/category" element={<Categories/>}></Route>
              <Route path="/category_page_2" element={<Category01/>}></Route>
              <Route path="/help" element={<Help/>}></Route>
              <Route path="/category_adventure" element={<Adventure/>}></Route>
              <Route path="/category_strategy" element={<Strategy/>}></Route>
              <Route path="/category_action" element={<Action/>}></Route>
              <Route path="/products/:id" element={<Details/>}></Route>
          </Routes>
          </BrowserRouter>
    </>
  )
}

export default App
