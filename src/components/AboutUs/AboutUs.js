import React from 'react';
import './AboutUs.css'
import { Card, Col, Row } from 'react-bootstrap';
import jon from '../../image/jon.webp'
import Rachel from '../../image/rechel.webp'
import Eliza from '../../image/eliza.webp'
import McKenzie from '../../image/McKenzie.webp'

const AboutUs = () => {
    return (
        <div className='mt-5'>
            <div className='container mt-5'>
                <h1 className='bg-info p-5 text-danger'>Our mission is to empower you to reach your nutrition and fitness goals.</h1>
                <p>
                    Welcome to Verywell Fit, an award-winning resource for credible and up-to-date information on all nutrition and exercise topics.

                    We are dedicated to empowering you with the best answers to your most pressing questions, from healthy eating to exercise and everything in between.

                    For more than 20 years, we’ve worked hard to create and refine our curated library of comprehensive and trustworthy information. Our team of writers and editors are industry experts, including registered dietitians, nutritionists, personal trainers, and board-certified physicians, who write and continually update our 6,200+ article library.

                    The Verywell Fit Review Board includes board-certified physicians and recognized health and wellness leaders who vet our articles and join us in our mission to inspire daily action with realistic, science-backed nutrition and fitness advice for your well-being.
                </p>
            </div>
            <div className='container'>
                <h1> Meet Our Team</h1>
                <p>For more than 20 years, we’ve worked hard to provide you with comprehensive information that you can rely on. Our team of editors, designers, developers, and more is passionate about being innovative in the online health space. After all, we’re human, too, and want to ensure we’re making the best decisions for the health of ourselves and our families.

                    Meet some of our team below. They are just one part of our staff, which includes SEO experts, product managers, designers, developers, and sales and marketing partners.</p>
             </div>

                <Row xs={1} md={2} className="g-4 m-5 p-3 ">
                    <Col>
                        <Card className='card'>
                            <Card.Img variant="top" className='imgInCard' src={jon} />
                            <Card.Body>
                                {/* <img src={RedMeat} alt="" /> */}
                                <Card.Title>Jon Roberts, PhD President, Dotdash Health</Card.Title>
                                <Card.Text>
                                    Dr. Roberts has been with Dotdash since 2013 and previously held roles as Chief Innovation Officer and Head of Data Science. Most recently he was the President of Dotdash Finance overseeing strategy for Investopedia and The Balance.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='card'>
                            <Card.Img variant="top" className='imgInCard' src={Rachel} />
                            <Card.Body>
                                {/* <img src={RedMeat} alt="" /> */}
                                <Card.Title>Rachel Berman, RD
                                    General Manager, Verywell</Card.Title>
                                <Card.Text>
                                    Rachel Berman, RD is general manager at Verywell, a registered dietitian, published author, and national nutrition spokesperson. She has been with the company for 10 years and oversees the content and business strategies for Verywell Fit, Verywell Family, and Verywell Mind.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='card'>
                            <Card.Img variant="top" className='imgInCard' src={Eliza} />
                            <Card.Body>
                                {/* <img src={RedMeat} alt="" /> */}
                                <Card.Title>Eliza Savage, MS, RD, CDN
                                    Senior Editor, Verywell Fit</Card.Title>
                                <Card.Text>
                                    Eliza Savage, MS, RD is a senior editor at Verywell Fit, a registered dietitian, and a published author. She is also a fitness enthusiast who has completed 2 full marathons and more than 25 half marathons.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='card'>
                            <Card.Img variant="top" className='imgInCard' src={McKenzie} />
                            <Card.Body>
                                {/* <img src={RedMeat} alt="" /> */}
                                <Card.Title>McKenzie Pendergrass
                                    Social Media Editor, Verywell</Card.Title>
                                <Card.Text>
                                    McKenzie found a spark for social media and audience engagement in journalism school. Now she combines her love for digital media and audience engagement as Verywell Fit's social media editor.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


            

            <div className='container text-start bg-light p-2'>
                <h3>Our Policies</h3>
                <p>Advertising Policy
                    Verywell accepts advertising on all of its sites but maintains a strict and clear separation between advertising and editorial content. We pay special attention to featuring advertising in a way that will not interfere with your reading experience.</p>

                <h3>Read Our Advertising Policy</h3>
                <p>Terms of Use
                    Verywellfit.com and its affiliated sites (collectively, the “Site”) are Dotdash brands, owned and operated by About, Inc. and its affiliates ("Verywell", the "Company", "we", or "us"). Access to and use of the Site is subject to terms and conditions of use (“Terms of Use”).</p>

                <h3> Read Our Terms of Use</h3>
                <p>Privacy Policy
                    We take online privacy seriously and we respect the concerns of our community of users. We may collect information, including personal data, directly from you if you choose to provide that information. When you access the Site, we and our third-party partners may automatically collect certain information about your visit using tools such as cookies, web beacons, and other similar technologies.  We may use the information gathered on Verywell for various purposes, including responding to an email inquiry, and to serve advertising, content and offers to you based on your interests and online activities.</p>

                <h3>Contact Us</h3>
                <p>We love to hear from our readers. If you have a comment, suggestion, or correction to share, feel free to contact us at feedback@verywell.com.

                    For press inquiries, email us at press@verywell.com.

                    If you would rather call us or send us a letter, you can reach us at:

                    Dotdash, Inc.
                    Attn: Verywell
                    28 Liberty St
                    New York, NY 10005
                    212-204-4000</p>

                <h3> Write for Us</h3>
                <p>We’re always looking for experienced and qualified writers with expertise and credentials in the areas of health and wellness. Email us at writeforus@verywell.com.

                    Please note that we do not accept unsolicited guest-authored content.</p>


                <h3> Work With Us</h3>

                <p> Join our team of top-notch editors, designers, programmers, and others as we continue to make Verywell a leading source of health and wellness information.
                </p>

                <h3>Advertise With Us</h3>
                <p>Verywell offers the highest value to advertisers through a combination of scale, credibility, and intent. Interested in advertising with us? Email us at sales@verywell.com.</p>





            </div>


        </div>
    );
};

export default AboutUs;