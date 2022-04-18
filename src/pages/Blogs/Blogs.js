import React from 'react';
import { Card } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Card className="shadow-lg w-75 mx-auto my-5">
            <Card.Body>
                <Card.Title>Q-1 : Difference between authorization and authentication?</Card.Title>
                <Card.Text>
                    <h5>Authentication : </h5>
                    <ul>
                        <li>Authentication verifies who the user is.</li>
                        <li>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</li>
                        <li>Authentication is the first step of a good identity and access management process.
                            <li>Authentication is visible to and partially changeable by the user.</li>
                        </li>
                    </ul>
                    <h5>Authentication : </h5>
                    <ul>
                        <li>Authorization determines what resources a user can access.</li>
                        <li>Authorization works through settings that are implemented and maintained by the organization.</li>
                        <li>Authorization always takes place after authentication.</li>
                        <li>Authorization isn’t visible to or changeable by the user.</li>
                    </ul>
                </Card.Text>
                <Card.Title>Q-2 : Why are you using firebase? What other options do you have to implement authentication?</Card.Title>
                <Card.Text>
                    i am using firebase because Firebase manages all data real-time in the database.Firebase Analytics gives me undeniable insight into user behavior.Authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints,Multi-factor authentication,Certificate-based authentication,Token-based authentication.
                </Card.Text>
                <Card.Title>Q-3 : What other services does firebase provide other than authentication?</Card.Title>
                <Card.Text>
                    <h5>There are many services which Firebase provides, Most useful of them are : </h5>
                    <ul>
                        <li>Cloud Firestore</li>
                        <li>Cloud Functions</li>
                        <li>Hosting</li>
                        <li>Cloud Storage</li>
                        <li>Google Analytics</li>
                        <li>Predictions</li>
                        <span>and many more</span>
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Blogs;