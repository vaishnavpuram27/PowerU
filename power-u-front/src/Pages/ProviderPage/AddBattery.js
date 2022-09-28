import React, { useEffect, useState } from "react";
import { Card, Form, Row, Col, InputGroup, FormControl, Button } from "react-bootstrap"
import {ADD_BATTERY} from "../../GraphQL/Mutations"
import { useMutation } from "@apollo/client";

function AddBattery() {

    const [battery_Id ,setbatteryid] = useState("");
    const [battery_Brand ,setbatterybrand] = useState("");
    const [battery_Price ,setbatteryprice] = useState("");
    const [battery_Count ,setbatterycount] = useState("");
    const [battery_Charge_status ,setbatteycharge] = useState(1);
    const [battery_Capacity ,setbatterycapacity] = useState("");
    const [battery_Provider_Email ,setProviderEmail] = useState("");
    const [add_battery,{error}]  = useMutation(ADD_BATTERY);


    const handleSubmit = (event) => {
      event.preventDefault();

    //   add_battery({
    //     variables:{
            
    //             battery:{
    //           battery_Id: battery_Id,
    //           battery_Brand:battery_Brand,
    //           battery_Capacity:parseInt(battery_Capacity),
    //           battery_Price:parseInt(battery_Price),
    //           battery_Count:parseInt(battery_Count),
    //           battery_Charge_status:battery_Charge_status,
    //           battery_Provider_Email:battery_Provider_Email
    //             }
              
    //     }
    // });
    console.log(battery_Id);
    console.log(battery_Capacity);

    alert("Battery added into the database")
  }
    if(error){
        console.log(error);
    }
    
  return (
    <div className="pricing-page">
    <h1>Adding Battery</h1>
    <Form method="POST">
        <Card>
            <Card.Header>Battery Information</Card.Header>
            <Card.Body>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintext" >
                    <Form.Label column sm="2">
                        Battery ID
                    </Form.Label>
                    <Col sm="5">
                        <Form.Control type="text" placeholder="ID" name="battery_Id"
                            // onChange={handleInputs}
                    onChange={(e)=> setbatteryid(e.target.value)}


                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext" >
                    <Form.Label column sm="2">
                        Battery Brand
                    </Form.Label>
                    <Col sm="5">
                        <Form.Control type="text" placeholder="Brand" name="battery_Brand"
                            // onChange={handleInputs}
                    onChange={(e)=> setbatterybrand(e.target.value)}


                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext" >
                    <Form.Label column sm="2">
                     Provider Email
                    </Form.Label>
                    <Col sm="5">
                        <Form.Control type="email" placeholder="Email" name="battery_Provider_Email"
                            // onChange={handleInputs}
                    onChange={(e)=> setProviderEmail(e.target.value)}

                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext" >
                    <Form.Label column sm="2">
                     Capcity
                    </Form.Label>
                    <Col sm="5">
                        <Form.Control type="text" placeholder="Capacity" name="battery_Capacity"
                                                onChange={(e)=> setbatterycapacity(e.target.value)}

                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext" >
                    <Form.Label column sm="2">
                     Count
                    </Form.Label>
                    <Col sm="5">
                        <Form.Control type="text" placeholder="Count" name="battery_Count"
                            // onChange={handleInputs}
                    onChange={(e)=> setbatterycount(e.target.value)}

                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                    <Form.Label column sm="2">
                        Price
                    </Form.Label>
                    <Col sm="5">
                        <InputGroup className="mb-3">
                            <InputGroup.Text>₹</InputGroup.Text>
                            <FormControl aria-label="Amount (to the nearest rupee)" name="battery_Price"
                                // onChange={handleInputs}
                    onChange={(e)=> setbatteryprice(e.target.value)}

                            />
                        </InputGroup>
                    </Col>
                </Form.Group>
                
            </Card.Body>
        </Card>  
       
        <br />
        <Button variant="success" size="lg" 
        onClick={handleSubmit}
        >Submit</Button>
    </Form>

</div>
  )
}

export default AddBattery