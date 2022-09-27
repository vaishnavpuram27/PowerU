import React from 'react'
import Card from "react-bootstrap/Card/"
import Button from "react-bootstrap/Button/"
import  Modal  from "react-bootstrap/Modal";
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
                    {props.item.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Details</h4>
                <ul>
                    <li>Phone Number : {props.item.phoneNo}</li>
                    <li>Email : {props.item.email}</li>

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
        <Card  style={{margin : "5px"}}>
                <Card.Body >
                    <Card.Title>{props.item.name}</Card.Title>
                    <Card.Text>Email: {props.item.email}</Card.Text>
                    <Card.Text>Phone Number: {props.item.phoneNo}</Card.Text>
                    <Button variant="primary" onClick={() => setModalShow(true)}>More Information</Button>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        item = {props.item}
                    />
                    <Button variant="danger" style={{marginLeft:"5px"}}>Delete</Button>
                </Card.Body>
            </Card>
    );
}
function ProviderCards() {
    const userData = [
        {
            name : "Rashmi Corp",
            email: "vasfdsf@rashmi.com",
            phoneNo: "523523523"
        },
        {
            name : "Nitin Corp",
            email: "fdsfsd@nithin.com",
            phoneNo: "5235235235523"
        },
        {
            name : "Sania Corp",
            email: "vafdsfru@sania.com",
            phoneNo: "5235235235523"
        }
    ]
    var arr  = [];
 for(let i  = 0 ;i<userData.length;i++){
    arr.push(userData[i])
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

export default ProviderCards