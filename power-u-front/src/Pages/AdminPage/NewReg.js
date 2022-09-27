import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import {React , useState} from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
// const schema = yup.object().shape({
//   firstName: yup.string().required(),
//   lastName: yup.string().required(),
//   username: yup.string().required(),
//   city: yup.string().required(),
//   state: yup.string().required(),
//   zip: yup.string().required(),
//   terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
// });

function NewReg() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
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