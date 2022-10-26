import React from 'react';
import { Link } from 'react-router-dom';
import './CourseLeftSite.css'


const CourseLeftSite = ({catagory}) => {
    
    
    return (
        <div>
            <Link className='left-site-nav' to={`/Catagory/${catagory.id}`}>{catagory.name}</Link>
        </div>
    );
};

export default CourseLeftSite;