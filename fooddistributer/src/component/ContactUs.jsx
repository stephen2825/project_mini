import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission, e.g., sending an email or storing in the database
    console.log('Form submitted:', formData);
    // You can add an API call or other logic here to handle the form data
  };

  return (
    <Container>
      <h1 style={{ color: '#333' }}>Contact Us</h1>
      <Row>
        <Col lg={6}>
          <p style={{ color: '#333' }}>
            If you have any questions or concerns, feel free to reach out to us using the form below.
          </p>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Your Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col lg={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Contact Details</Card.Title>
              <Card.Text style={{ color: '#333' }}>
                <strong>Address:</strong> 123 Food Street, Cityville
                <br />
                <strong>Email:</strong> info@fooddelivery.com
                <br />
                <strong>Phone:</strong> +123 456 7890
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
