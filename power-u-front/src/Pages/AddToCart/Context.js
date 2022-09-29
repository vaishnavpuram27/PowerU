import React, { useContext, useState } from "react";
import Items from "./Items";
import { Scrollbars } from "react-custom-scrollbars-2";
import { CartContext } from "./Cart";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarAC from "../NavbarAC";
const ContextCart = () => {
  // consumer
  const { item, totalAmount, totalItems, clearCart } = useContext(CartContext);
  const [sucessfull, setSucessfull] = useState(false);
  
    if (item.length === 0) {
      return (
        <>
        <NavbarAC></NavbarAC>
          <Modal show={sucessfull} onHide={() => setSucessfull(undefined)}>
            <Modal.Header closeButton>
              <Modal.Title>Congratulations</Modal.Title>
            </Modal.Header>
            <Modal.Body>Order placed sucessfully</Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setSucessfull(undefined)}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
         
          <section className="main-cart-section">
            <div className="cart-items">
              <div className="cart-items-container">
                <Scrollbars className="cart-items-container">
                  <h1 style={{ justifyContent: "center" }}>Empty Cart</h1>
                  <Link to="/customer" className="btn-link">
                    <div className="exit">
                      <button className="btn btn-primary">Home</button>
                    </div>
                  </Link>
                </Scrollbars>
              </div>
            </div>
          </section>
        </>
      );
    } else {
      return (
        <>
          <NavbarAC></NavbarAC>
          <section className="main-cart-section">
            <div className="cart-items">
              <div className="cart-items-container">
                <Scrollbars className="cart-items-container">
                  {item.map((curItem) => {
                    return <Items key={curItem.id} {...curItem} />;
                  })}
                </Scrollbars>
              </div>
            </div>
            <div className="card-total">
              <h4 style={{ marginRight: "60px", marginTop: "0px" }}>
                Cart Total: <span> ₹{totalAmount} </span>
              </h4>
              <button onClick={clearCart} style={{ marginRight: "5px" }}>
                Clear Cart
              </button>
              <button
                onClick={() => {
                  clearCart();
                  setSucessfull(true);
                }}
                style={{ marginRight: "60px" }}
              >
                Book Now
              </button>
            </div>
          </section>
        </>
      );
    }

};

export default ContextCart;
