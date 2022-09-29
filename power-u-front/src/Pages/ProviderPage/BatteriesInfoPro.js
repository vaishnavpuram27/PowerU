import React from 'react'
import Card from "react-bootstrap/Card/"
import Button from "react-bootstrap/Button/"
import  Modal  from "react-bootstrap/Modal";
import products from "./products.json";
import { LOAD_BATTERIES } from '../../GraphQL/Queries';
import {useQuery,useLazyQuery} from '@apollo/client';
import { useEffect } from 'react';
import battery from "./battery.jpeg"
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
                <li>Provider : {props.item.battery_Provider_Email}</li>
                {/* <li>Description : {props.item.description}</li> */}
                <li>Price: ₹{props.item.battery_Price}</li>
                <li>Count: {props.item.battery_Count}</li>
                <li>Capacity: {props.item.battery_Capacity}Kwh</li>

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
        <center><Card.Img variant='top' src={battery} style={{height:"125px"}}/></center>
            <Card.Title>{props.item.battery_Brand}</Card.Title>
            <Card.Text>Provider : {props.item.battery_Provider_Email}</Card.Text>
            <Card.Text>Price: ₹{props.item.battery_Price}</Card.Text>
            <Card.Text>Count: {props.item.battery_Count}</Card.Text>
            <Card.Text>Capacity: {props.item.battery_Capacity}Kwh</Card.Text>
            
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
function BatteriesInfoPro(props) {
    const {error,loading,data} = useQuery(LOAD_BATTERIES);

    var products =[]

    if(loading) return <p>loading</p>

    if(error)  return <p>error</p>

   

   

    if(data){

        products = data.get_all_batteries;

    }

   



    var arr  = [];

 for(let i  = 0 ;i<products.length;i++){

    if(products[i].battery_Provider_Email===props.loggedMail){

        arr.push(products[i])

    }

   

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

export default BatteriesInfoPro;