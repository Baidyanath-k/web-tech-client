import React from 'react';

const Blog = () => {
    return (
        <div className='py-5'>
            <div className="cors mb-5">
                <h4>What is `cors`</h4>
                <p>In ReactJS, Cross-Origin Resource Sharing (CORS) refers to the method that allows you to make requests to the server deployed at a different domain. As a reference, if the frontend and backend are at two different domains, we need CORS there. </p>
            </div>
            <div className="firebase">
                <h4>Why are you using `firebase`? What other options do you have to implement authentication?</h4>
                <p>Firebase provides tools to grow your app and business, for startups & global enterprises. Get your app up and running quickly & securely with fully managed backend infrastructure. 15+ Products & Solutions. Accelerate Development.</p>
                <h6>I have several options for implementing authentication</h6>
                <ul>
                    <li>Parse</li>
                    <li>Back4App</li>
                    <li>AWS Amplify</li>
                    <li>Kuzzle</li>
                </ul>
            </div>
            <div className="rout">
                <h4>How does the private route work?</h4>
                <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)</p>
            </div>
            <div className="node">
                <h4>What is Node? How does Node work?</h4>
                <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)</p>
            </div>
        </div>
    );
};

export default Blog;