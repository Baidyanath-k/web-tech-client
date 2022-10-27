import {AuthErrorCodes} from 'firebase/auth';
import React from 'react';
import Card from 'react-bootstrap/Card';

const Category = ({category}) => {
    console.log(category);
    const {
        author,
        details,
        rating,
        title,
        total_view,
        image_url
    } = category;
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
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>

    );
};

export default Category;