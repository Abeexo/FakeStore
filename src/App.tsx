import { BrowserRouter , Route, Link, Routes} from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Header } from './components/Header/Header';
import { createContext ,useContext, useState} from 'react';
import { Button } from './components/CustomButton/ButtonContext';
import AllContainer, { Product } from './components/Container/allContainer';
import Cart from './components/Card/Cart';


export const ThemeContext = createContext("light");

function App() {
  const [theme, setTheme] = useState("light");
  const [productsToCart, setProductsToCart] = useState<Product[]>([]);
  const [cartProducts, setCartProducts] = useState<Product[]>([]);


  return (
    
    <BrowserRouter>
    <ThemeContext.Provider value={theme}>
    <Header/> 
    <div className='buttonlight' style={{
  display: "flex",
  width: "50px",
  position: "absolute",
  }}>
    <Button setTheme={setTheme}/></div>
   
      
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/prodotti" element={<AllContainer />}></Route>
        <Route path="/carrello" element={<Cart products={[]} removeProduct={function (product: Product): void {
            throw new Error('Function not implemented.');
          } } />}></Route>
      </Routes>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
