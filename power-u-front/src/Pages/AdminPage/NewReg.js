import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import {React , useState} from 'react';
import{CREATE_PROVIDER} from '../../GraphQL/Mutations'
import { useMutation } from '@apollo/client';



function NewReg() {
    const [validated, setValidated] = useState(false);
    const [provider_Name ,setProviderName] = useState("");
    const [provider_Email ,setProviderEmail] = useState("");
    const [provider_Password ,setProviderPassword] = useState("");
    const [add_provider,{error}]  = useMutation(CREATE_PROVIDER);


    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      else{
      setValidated(true);
      add_provider({
        variables:{
            provider:{
                provider_Email:provider_Email,
                provider_Name:provider_Name,
                provider_Password:provider_Password
            
              }
        }
    });
    alert("Provider added into the database")
  }
    if(error){
        console.log(error);
    }
    };
  
    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Provider name</Form.Label>
           
            <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">
            <i className="fas  fa-user"></i>
            </InputGroup.Text>
            <Form.Control
              required
              type="text"
              placeholder="Provider name"
            onChange={(e)=> setProviderName(e.target.value)}

            //   defaultValue="Mark"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Email Address</Form.Label>
           
            <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">
            <i className="fas  fa-envelope"></i>
            </InputGroup.Text>
            <Form.Control
              required
              type="email"
              placeholder="Email"
            onChange={(e)=> setProviderEmail(e.target.value)}

            //   defaultValue="Mark"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Password</Form.Label>
           
            <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">
            <i className="fas  fa-lock"></i>
            </InputGroup.Text>
            <Form.Control
              required
              type="password"
              placeholder="Password"
            onChange={(e)=> setProviderPassword(e.target.value)}

            //   defaultValue="Mark"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        {/* <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Location</Form.Label>
           
            <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">
            <i className="fas  fa-location-arrow"></i>
            </InputGroup.Text>
            <Form.Control
              required
              type="text"
              placeholder="Location"
            //   defaultValue="Mark"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row> */}
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
    );
  }

export default NewReg;