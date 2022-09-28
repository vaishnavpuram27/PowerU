import React from 'react'
import Card from "react-bootstrap/Card/"
import Button from "react-bootstrap/Button/"
import  Modal  from "react-bootstrap/Modal";
import{LOAD_PROVIDERS} from '../../GraphQL/Queries';
import{REMOVE_PROVIDER} from '../../GraphQL/Mutations'
import {useQuery,gql, useMutation} from '@apollo/client';


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
                    {props.item.provider_Name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Details</h4>
                <ul>
                    {/* <li>Phone Number : {props.item.phoneNo}</li> */}
                    <li>Email : {props.item.provider_Email}</li>

                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


function ProviderCards() {
    const {error,loading,data} = useQuery(LOAD_PROVIDERS);
    var [remove_provider,{muError}]= useMutation(REMOVE_PROVIDER);

    var userData =[]
    if(loading) return <p>loading</p>
    if(error)  return <p>error</p>
    
    
    if(data){
        userData = data.get_all_providers;
    }

    const Cards=(props)=>{
        const [modalShow, setModalShow] = React.useState(false);
        
        const removeProvider = ()=>{
            remove_provider({variables:{
                
                
                    mail : props.item.provider_Email
                  
            
        }});
           alert("Provider Deleted") 
        }
            return(
                <Card  style={{margin : "5px"}}>
                        <Card.Body >
                            <Card.Title>{props.item.provider_Name}</Card.Title>
                            <Card.Text>Email: {props.item.provider_Email}</Card.Text>
                            {/* <Card.Text>Phone Number: {props.item.phoneNo}</Card.Text> */}
                            <Button variant="primary" onClick={() => setModalShow(true)}>More Information</Button>
                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                item = {props.item}
                            />
                            <Button variant="danger" style={{marginLeft:"5px"}} onClick={removeProvider}>Delete</Button>
                        </Card.Body>
                    </Card>
            );
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

export default ProviderCards