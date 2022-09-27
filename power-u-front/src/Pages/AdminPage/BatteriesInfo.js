import React from 'react'
import Card from "react-bootstrap/Card/"
import Button from "react-bootstrap/Button/"
import  Modal  from "react-bootstrap/Modal";
import products from "./products.json";
function MyVerticallyCenteredModal(props) {
    // console.log(props)
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.item.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Details</h4>
                <ul>
                    <li>Provider : {props.item.provider}</li>
                    <li>Description : {props.item.description}</li>
                    <li>Price : ₹{props.item.price}</li>

                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
const Cards=(props)=>{
const [modalShow, setModalShow] = React.useState(false);


    return(
        <Card style={{margin : "5px"}}>
                <Card.Body >
                    <Card.Title>{props.item.title}</Card.Title>
                    <Card.Text>Provider : {props.item.provider}</Card.Text>
                    <Card.Text>Price: ₹{props.item.price}</Card.Text>
                    <Button variant="primary" onClick={() => setModalShow(true)}>More Information</Button>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        item = {props.item}
                    />
                </Card.Body>
            </Card>
    );
}
function BatteriesInfo() {
    // const userData = [
    //     {
    //         name : "vai",
    //         email: "vasfdsf@gmail.com",
    //         phoneNo: "523523523"
    //     },
    //     {
    //         name : "varu",
    //         email: "varu@gmail.com",
    //         phoneNo: "5235235235523"
    //     }
    // ]
    var arr  = [];
 for(let i  = 0 ;i<products.length;i++){
    arr.push(products[i])
 }
 arr.reverse();
    const cards = arr.map(item=>{
        return( <Cards
            key={item._id}
            item={item}
        />)
     })
  return (
    <div style = {{marginLeft : "12%", marginRight : "auto"}}>
        <div className="container ">
        <div className='d-flex flex-wrap'>
       
             {cards}
            
        </div>
    </div>
    </div>
  )
}

export default BatteriesInfo;