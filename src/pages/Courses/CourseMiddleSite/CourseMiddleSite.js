import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar,FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CourseMiddleSite = ({detail}) => {
    
    const {
        _id,
        details,
        image_url,
        rating,
        title,
        total_view
    } = detail;
    return (
        <Card className="text-center mb-5">
            <Card.Header>{title}</Card.Header>
            <Card.Body>
                
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.slice(0,150)+'...'}
                </Card.Text>
                <Button variant="primary">
                    <Link to={`/details/${_id}`} className='text-decoration-none text-white-50'>See Details</Link>
                </Button>
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
                <div className="card-footer-left">
                    <p><FaStar className='text-warning'></FaStar> {rating.number}</p>
                </div>
                <div className="card-footer-right">
                    <p> <FaEye></FaEye> {total_view} </p>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default CourseMiddleSite;