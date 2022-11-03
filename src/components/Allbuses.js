import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Allbuses = ({ availableBus }) => {
  return (
    <div className="single-bus">
      {availableBus.map((bus) => {
        const { name, passengers } = bus;
        return (
          <Card style={{ width: '18rem' }} key={name}>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Seats Available {passengers}
              </Card.Subtitle>
              <Card.Text>Rs. 500</Card.Text>
              <Button variant="primary">
                <Link to= '/seatSelection'> View Seats</Link>
                VIEW SEAT
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default Allbuses