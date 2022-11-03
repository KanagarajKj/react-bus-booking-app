import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const form = () => {
  return (
    <section className='personal-info-form'>
        <div>
            <h3>Enter Your Details</h3>
        </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Name..." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Mobile Number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Accept the Terms & Conditions</Form.Label>
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Confirm
        </Button>
      </Form>
    </section>
  );
}

export default form