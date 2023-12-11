import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Header } from "./Header";
import { useState } from "react";
import { saveCustomer } from "../customerService/CustomerService";

export function CustomerRegistrationForm() {
    const [formData, setFormData] = useState({ name:"", phoneNumber: "", email: "", add: "", pinCode:"" });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log(formData);
            const result = await saveCustomer(formData);
            setFormData({ name:"", phoneNumber: "", email:"", add:"", pinCode:""});
            
            setIsSubmitted(true);

            setTimeout(() => {
                setIsSubmitted(false);
            }, 1500);

            console.log(result.message);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container>
            <Header text="Register Customer here"></Header>

            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={isSubmitted ? formData.name : null} placeholder="Enter name" name="name" onKeyUp={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>PhoneNumber</Form.Label>
                            <Form.Control type="text" placeholder="Enter number" name="phoneNumber" onKeyUp={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="Enter mail" name="email" onKeyUp={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter address" name="add" onKeyUp={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Pincode</Form.Label>
                            <Form.Control type="text" placeholder="Enter pin" name="pinCode" onKeyUp={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3}>
                        <Button variant="primary" type="submit">Register</Button>
                    </Col>

                </Row>
            </Form>
            <Row className="mt-3">
                <Col lg={4}>
                    {isSubmitted ? <Alert variant="success">Customer Registered</Alert> : null}
                </Col>
            </Row>
        </Container>
    );
}