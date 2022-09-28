import React from 'react'
import Card from "react-bootstrap/Card/"
import Button from "react-bootstrap/Button/"
import  Modal  from "react-bootstrap/Modal";
import {useQuery} from '@apollo/client';
import {LOAD_CUSTOMERS} from '../../GraphQL/Queries';

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
                    {props.item.cust_Name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Details</h4>
                <ul>
                    {/* <li>Phone Number : {props.item.c}</li> */}
                    <li>Email : {props.item.cust_Email}</li>

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
                    <Card.Title>{props.item.cust_Name}</Card.Title>
                    <Card.Text>Email: {props.item.cust_Email}</Card.Text>
                    {/* <Card.Text>Phone Number: {props.item.phoneNo}</Card.Text> */}
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
function CustomerCards() {
    const {error,loading,data} = useQuery(LOAD_CUSTOMERS);
    var userData =[]
    if(loading) return <p>loading</p>
    if(error)  return <p>error</p>
    
    
    if(data){
        userData = data.get_all_customers;
    }
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

export default CustomerCards