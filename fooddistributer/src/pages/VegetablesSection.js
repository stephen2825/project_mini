import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import cabbage from './img/cabbage.jpg';
import potatoes from './img/potatoes.jpg';
import tomatoes from './img/tomatoes.jpg';



const VegetablesSection = () => {
  return (
    <div className="mt-4">
      <h2><h2> <Link to="/buy">Vegetables Section</Link></h2></h2>
      <Row>
        
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={potatoes} />
            <Card.Body>
              <Card.Title>Potatoes</Card.Title>
              <Card.Text>
                Fresh and nutritious sweet potatoes to add to your cart.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={tomatoes} />
            <Card.Body>
              <Card.Title>Tomatoes</Card.Title>
              <Card.Text>
                Fresh and nutritious tomatoes to add to your cart.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={cabbage} />
            <Card.Body>
              <Card.Title>Cabbage</Card.Title>
              <Card.Text>
                Fresh and nutritious cabbage grow by natural process to add to your cart.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
       
      </Row>
      
    </div>
  );
};

export default VegetablesSection;
