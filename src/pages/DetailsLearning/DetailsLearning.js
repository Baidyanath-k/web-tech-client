import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FaEye, FaStar } from 'react-icons/fa';

const DetailsLearning = () => {
    const detailLearning=useLoaderData();
    console.log(detailLearning)
    const {
        author,
        details,
        rating,
        title,
        total_view,
        image_url
    } = detailLearning;
    return (
        <div>
            <Card className="text-center mb-4">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className="card-header-left">
                        <img
                            style={{
                            width: '50px'
                        }}
                            src={author.img}
                            alt=""
                            className='rounded-circle me-2'/> {author.name}
                    </div>
                    <div className="card-header-right">
                        <p>{author.published_date}</p>
                    </div>

                </Card.Header>
                <Card.Body>
                    <Card.Title>
                        <h3>{title}</h3>
                    </Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details}
                    </Card.Text>
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
        </div>
    );
};

export default DetailsLearning;