import React from 'react';
import { Product } from '../Container/allContainer';
import './card.css';
import Card from './Card';

type CartProps = {
  products: Product[];
  removeProduct: (product: Product) => void;
};

export const Cart = (props: CartProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Total price</th>
          <th>Price per unit</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.products.map((product) => (
          <tr key={product.id}>
            <td>{product.title}</td>
            <td>{product.quantity}</td>
            <td>{product.totalPrice.toFixed(2)}</td>
            <td>{product.price.toFixed(2)}</td>
            <td>
              <button onClick={() => props.removeProduct(product)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Cart;


