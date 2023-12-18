import React, { Children, ReactNode } from 'react';
import { Product } from '../Container/allContainer';
import { Buttonn } from '../CustomButton/Button';
import './card.css';
import Button from 'react-bootstrap/Button';
import Modal, { ModalProps } from 'react-bootstrap/Modal';
import { Omit, BsPrefixProps } from 'react-bootstrap/esm/helpers';

type CardProps = { setItems: Function; arr: Product; index: number; onAddToCart: (product: Product) => void };
type MyVerticallyCenteredModalProps = Omit<ModalProps, 'children'> & {
  children: ReactNode;
};

export const Card = (props: CardProps) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [totalPrice, setTotalPrice] = React.useState(props.arr.price * props.arr.quantity);

  const product = props.arr;

  const changeQty = (value: number) => {
    props.setItems((prevState: Product[]) => {
      prevState[props.index].quantity = Math.max(prevState[props.index].quantity + value, 0);
      setTotalPrice(prevState[props.index].price * prevState[props.index].quantity);
      return [...prevState];
    });
  };

  const handleAddToCart = () => {
    const productToAdd = { ...props.arr, totalPrice };
    props.onAddToCart(productToAdd);
    setModalShow(false);
  };
  function MyVerticallyCenteredModal(props: MyVerticallyCenteredModalProps) {
    return (
      <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Calcola il Prezzo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <Buttonn title="-" onClick={() => changeQty(-1)} />
            <span className="mx-3">{product.quantity}</span>
            <Buttonn title="+" onClick={() => changeQty(1)} />
            <span className="mx-3">Total price:  &euro;{totalPrice.toFixed(2)}</span>
          </div>
        </Modal.Body>
        <Modal.Footer>
  <Button onClick={props.onHide}>Close</Button>
  <Button onClick={props.onAddToCart}>Aggiungi al carrello</Button>
</Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <div className="card1" style={{ width: '18rem' }}>
        <Button variant="primar" onClick={() => setModalShow(true)}>
          <picture>
            <img src={String(props.arr.image)} className="card-img-top p-2" alt="product image" />
          </picture>
        </Button>
        <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} onAddToCart={() => console.log("Add to cart")} children={null} />
        <div className="card-body">
          <Button variant="primar" onClick={() => setModalShow(true)}>
            <h5 className="card-title p-2">
              <b>
                {props.arr.title} {props.index}
              </b>
            </h5>
            <p className="card-text p-2">{props.arr.description}</p>
            <p className="card-text p-2 blockquote">{props.arr.category}</p>
          </Button>
          <a className="btn btn-primary">
          &euro; {props.arr.price}
          </a>
          <div className="w-90 d-flex flex-row justify-content-center"></div>
        </div>
      </div>
    </>
  );
};

export default Card