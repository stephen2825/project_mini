import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import A from "./aaa.jpg";
import o from "./o.jpg";
import v from "./v.jpg";
import './AboutUs.css'; 

export const AboutUs = () => {
  return (
    <Container>
      <h1>Your Trusted Food Delivery Partner</h1>
      <p>
        Welcome to FoodDeliver, where ensuring the joy of your dining experience is our top priority.
        With a commitment to quality, efficiency, and customer satisfaction, we are your dedicated partners in delivering delicious moments to your doorstep.
      </p>
      <p>
        At FoodDeliver, we understand the importance of delightful dining, and our mission is to provide a seamless and enjoyable food delivery service.
        Whether you're craving your favorite cuisine or discovering new flavors, we're here to bring culinary delights to your table.
      </p>
      <p>
        At FoodDeliver, we don't just deliver food; we deliver happiness. Your satisfaction and culinary delight are our top priorities, and we're committed to being the partner you can rely on.
      </p>
      <p>
        Join us on this journey of flavor and convenience. Together, let's savor the moments with FoodDeliver.
      </p>
      <hr className="hr" />
      <h2><strong>Vision</strong></h2>
      <p>
        At FoodDeliver, our vision is to be the go-to platform for convenient and delightful food delivery experiences.
        We aim to redefine the food delivery landscape by embracing innovation, customer-centricity, and a passion for culinary excellence.
      </p>
      <hr className="hr" />
      <h2><strong>Mission</strong></h2>
      <p>
        Our mission at FoodDeliver is to provide a diverse and reliable food delivery service.
        We strive to connect food enthusiasts with their favorite cuisines, offering a wide range of options, timely deliveries, and exceptional customer service.
        Through our commitment to quality, efficiency, and customer satisfaction, we aim to be the preferred choice for food delivery.
      </p>
      <hr className="hr" />
      <h2><strong>Core Values</strong></h2>
      <ul className='text-start'>
        <li>
          Quality: We uphold the highest standards in the quality of our food and service.
        </li>
        <li>
          Customer-Centricity: Our customers are at the heart of everything we do, and their satisfaction is our ultimate goal.
        </li>
        <li>
          Efficiency: We embrace efficiency and technology to provide a seamless ordering and delivery experience.
        </li>
        <li>
          Diversity: We celebrate culinary diversity, offering a wide range of cuisines to cater to every taste.
        </li>
        <li>
          Reliability: We aim to be a reliable partner, ensuring timely and dependable food deliveries.
        </li>
      </ul>
      <p>
        At FoodDeliver, our vision, mission, and core values guide us in providing a delightful and reliable food delivery experience.
      </p>
      <br /><br />
      <hr />
      <br /><br />
      <h3>Our Team</h3>
      <br /><br />
      <Row>
       
        <Col lg="4">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={A} style={{ height: '350px', width: '100%', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>Akshay Wagh</Card.Title>
              <Card.Text>
                <strong>Phone no: 9763194135</strong>
                <br /><br />
                <strong>Email: akshayw@gmail.com</strong>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={o} style={{ height: '350px', width: '100%', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>Omkar Yelam</Card.Title>
              <Card.Text>
                <strong>Phone no: 9876543210</strong>
                <br /><br />
                <strong>Email: omkar@example.com</strong>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={v} style={{ height: '350px', width: '100%', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>Vaishnavi hiradeve</Card.Title>
              <Card.Text>
                <strong>Phone no: 95124567</strong>
                <br /><br />
                <strong>Email: Vaishnavi12@example.com</strong>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br /><br />
    </Container>
  );
}


