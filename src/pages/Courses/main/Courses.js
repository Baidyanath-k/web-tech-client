import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseLeftSite from '../CourseLeftSite/CourseLeftSite';
import CourseMiddleSite from '../CourseMiddleSite/CourseMiddleSite';
import './Courses.css';


const Courses = () => {
    const [categories,
        setCatagories] = useState([]);

        const details=useLoaderData();
        

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
                    <div className="middle-site py-4">
                    {
                        details.map(detail=> <CourseMiddleSite
                            key={detail._id}
                            detail={detail}
                        ></CourseMiddleSite>)
                    }
                    </div>
                    
                    
                </Col>
            </Row>
        </div>
    );
};

export default Courses;