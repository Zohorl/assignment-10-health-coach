import React from 'react';
import { Button, Card } from 'react-bootstrap';


const About = () => {
    return (
        <div className='my-5'>
            <Card className="shadow-lg w-50 mx-auto">
                <Card.Body>
                    <Card.Title className='text-decoration-underline text-center'>About Myself</Card.Title>
                    <Card.Text className='p-3'>
                        Assalamu Alaikum,everyone. I am <span className='text-success fs-5 px-2'>Md Zohorul Islam</span> . I was born in Chapai Nawabganj,Rajshahi . I am now a curious student. I am now learning Web Development. So that I work hard to learn all the topic for Font-end Development . I want to work in an organization in future .
                        <p className='fs-5'>Getting the Basics</p>
                        <p>After deciding I wanted to get into web development the first question on my mind was “What do I learn?” After doing some research, I ended up making my learning path based on what most entry-level web developer positions asked for, which was:</p>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>Tailwind</li>
                            <li>JavaScript</li>
                            <li>React JS</li>
                        </ul>
                    </Card.Text>
                    <a href="https://github.com/Zohorl">
                        <Button variant="success "> <span >More About Me</span> </Button>
                    </a>

                </Card.Body>
            </Card>
        </div>
    );
};

export default About;