import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import mangoes from './img/mangoes.jpg';
import oranges from './img/oranges.jpg';
import watermelon from './img/watermelon.jpg';



const FruitsSection = () => {
  return (
    <div className="mt-4">
      <h2> <Link to="/buy">Fruits Section</Link></h2>
      <Row>
        
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={mangoes} />
            <Card.Body>
              <Card.Title>Mangoes</Card.Title>
              <Card.Text>
                Fresh and nutritious mangoes to add to your cart.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={oranges} />
            <Card.Body>
              <Card.Title>Oranges</Card.Title>
              <Card.Text>
                Fresh and nutritious oranges to add to your cart.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={watermelon} />
            <Card.Body>
              <Card.Title>Watermelon</Card.Title>
              <Card.Text>
                Fresh and nutritious watermelon to add to your cart.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
       
      </Row>
      
    </div>
  );
};

export default FruitsSection;
