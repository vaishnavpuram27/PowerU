import React, { useEffect, useState } from "react";
import { Card, Form, Row, Col, InputGroup, FormControl, Button } from "react-bootstrap"

function AddBattery() {
  return (
    <div className="pricing-page">
    <h1>Adding Battery</h1>
    <Form method="POST">
        <Card>
            <Card.Header>Battery Information</Card.Header>
            <Card.Body>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintext" >
                    <Form.Label column sm="2">
                        Battery Title
                    </Form.Label>
                    <Col sm="5">
                        <Form.Control type="text" placeholder="Name" name="tier1_name"
                            // onChange={handleInputs}

                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext" >
                    <Form.Label column sm="2">
                     Email
                    </Form.Label>
                    <Col sm="5">
                        <Form.Control type="email" placeholder="Email" name="tier1_name"
                            // onChange={handleInputs}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext" >
                    <Form.Label column sm="2">
                     Capcity
                    </Form.Label>
                    <Col sm="5">
                        <Form.Control type="text" placeholder="Capacity" name="tier1_name"
                            // onChange={handleInputs}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext" >
                    <Form.Label column sm="2">
                     Count
                    </Form.Label>
                    <Col sm="5">
                        <Form.Control type="number" placeholder="Count" name="tier1_name"
                            // onChange={handleInputs}
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
                            <FormControl aria-label="Amount (to the nearest dollar)" name="tier1_price"
                                // onChange={handleInputs}
                            />
                        </InputGroup>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                    <Form.Label column sm="2">
                        Details
                    </Form.Label>
                    <Col sm="5">
                        <Form.Control
                            as="textarea"
                            placeholder="Details"
                            style={{ height: '100px' }}
                            name="tier1_details"
                            // onChange={handleInputs}
                        />
                    </Col>
                </Form.Group>
            </Card.Body>
        </Card>  
       
        <br />
        <Button variant="success" size="lg" 
        // onClick={proPricingForm}
        >Submit</Button>
    </Form>

</div>
  )
}

export default AddBattery