import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import CourseLeftSite from '../CourseLeftSite/CourseLeftSite';
import './Courses.css';


const Courses = () => {
    const [categories,
        setCatagories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/learning-catagories')
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [])
    return (
        <div className='course-main-container'>
            <Row>
                <Col lg='4'>
                    <div className="course-left-site">
                        {
                            categories.map(catagory => <CourseLeftSite
                                key={catagory.id}
                                catagory={catagory}
                            ></CourseLeftSite>)
                        }
                    </div>

                </Col>
                <Col lg='8'>
                    fffffffffffffffffffff
                </Col>
            </Row>
        </div>
    );
};

export default Courses;