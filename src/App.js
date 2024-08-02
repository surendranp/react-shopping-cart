import React from 'react';
import './App.css';
// import {Head} from "./componentes/header/Head.jsx";
import Banner from './componentes/body/Banner.jsx';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {Pro} from "./componentes/product/pro";
import {About} from './componentes/about/About.jsx';
import {Menu} from './componentes/menu/Menu.jsx';
import {Footer} from './componentes/footer/Footer';
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop.jsx";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";


function App() {
 
 
  return (
    <div className='App'>
   <ShopContextProvider>
<Router>
  {/* <Head /> */}
  <Navbar />
<Routes>
<Route path='/' element={<Banner></Banner> } />
<Route path='/pro' element={<Pro></Pro>} />
<Route path='/About' element={<About></About>} /> 
<Route path='/Menu'element={<Menu></Menu>} />
<Route path="/shop" element={<Shop />} />
<Route path="/cart" element={<Cart />} />
</Routes>
<Footer />
</Router>
</ShopContextProvider>

    </div>
  );
}
export default App;
