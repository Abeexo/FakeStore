import Dropdown from 'react-bootstrap/Dropdown';
import React, { useContext, useEffect, useState } from 'react';
import { Card } from '../Card/Card';
import { Counter } from '../Counter/Counter';
import { Container } from './Container';
import './allcontainer.css';
import { ThemeContext } from '../../App';
import DropdownOrder from '../Dropdown/DropdownOrder';
import DropdownCategory from '../Dropdown/DropdownCategory';


export type Product = {
    totalPrice: any; id: number, title: string, description: string, price: number,category: string, image: string, quantity: number 
}

const AllContainer = () => {
  const theme = useContext(ThemeContext);
  const className = 'card-' + theme;
  const [price, setPrice] = useState(0);  
  const [items, setItems]= useState<Product[]>([]); 
  const [selectedCategory, setSelectedCategory] = useState("");
  const [cartProducts, setCartProducts] = React.useState<Product[]>([]);
  


 
  useEffect(() => {
    fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(data => {
    const arr = data.products.map((item: any) => {
      return { 
        id: item.id,
        title: item.title,
        description: item.description,
        price: item.price,
        category: item.category,
        image: item.thumbnail,
        quantity: 0 
      };
    });
    setItems(arr);
  })
  .catch(console.error);

  }, [])  
  
  useEffect(() => {
    setPrice(items.reduce((acc, {price, quantity})=> acc + price * quantity, 0)); 
  }, [items]); 

  const handleSortByPrice = () => {
    items.sort((a, b) => a.price - b.price);
    setItems([...items]);
  }

  const handleSortByCategory = () => {
    const sortedItems = [...items].sort((a, b) => a.category.localeCompare(b.category));
    setItems(sortedItems);
  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };
  const handleAddToCart = (product: Product) => {
    setCartProducts((prevProducts) => [...prevProducts, product]);
  };

  
  return (
   <>
   <DropdownCategory
  onClick={() => setSelectedCategory("fragrances")}
  onClick2={() => setSelectedCategory("groceries")}
  onClick3={() => setSelectedCategory("home-decoration")}
  onClick4={() => setSelectedCategory("laptops")}
  onClick5={() => setSelectedCategory("skincare")}
  onClick6={() => setSelectedCategory("smartphones")}
  onClick7={() => setSelectedCategory("")}
/>

   <DropdownOrder onClick={handleSortByPrice} onClick2={handleSortByCategory} />
   <div className={className}>
   <div className="Container">
   {items.map((item, index) => {
 if (selectedCategory === "" || item.category === selectedCategory) {
  return (
    <Container key={index}>
       <Card key={item.id} arr={item} index={index} setItems={setItems} onAddToCart={handleAddToCart}/>
    </Container>
  );
}
  return null;
})}
</div>
    </div></>     
        )}
    
 
export default AllContainer;