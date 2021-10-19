import React from 'react';
import './HealthyEating.css'
import carrots from '../../image/300x300-Carrots.png'
import Papaya from '../../image/300x300-Pineapple.png'
import Pineapple from '../../image/300x300-Pineapple.png'
import Citrus from '../../image/300x300-Carrots.png'
import Turmeric from '../../image/300x300-Turmeric.png'
import Ginger from '../../image/300x300-Ginger.png'
import Garlic from '../../image/300x300-Garlic.png'
import RedMeat from '../../image/300x300-Red-meat.png'
import Yogurt from '../../image/300x300-yogurt.png'
import CruciferousVegetables from '../../image/300x300-Radish.png'
import { Card, Col, Row } from 'react-bootstrap';


const HealthyEating = () => {
    return (
        <div className=''>
            <div className='p-5 text bg-info'>
                <h1 className='text-danger'>Improve Your Immunity With These Super Foods</h1>
                <p>As we all grow accustomed to life in the age of novel coronavirus COVID-19, and scientists continue working on antivirals and vaccines, many experts are suggesting the public take a holistic approach to general health maintenance. There are trillion of inquiries about how to stay safe from getting affected and therefore improving immunity is one of the most important things that is doing the rounds.

                    What are the foods that boost immunity? What are the supplements to take? While you are baffled, let us tell you a few tricks on how to improve your immunity. Although the tips below are not ways to protect you from contracting the virus, having a healthy immune system will strengthen your body’s self-defense mechanism. They are the warriors who fight just for you, to keep you healthy and strong. Since we figured what our immune system does for us let’s see what we can do for it.

                    Here’s a list of 10 foods that would help you keep your immune system up and working.</p>
            </div>
           

            <Row xs={1} md={2} className="g-4 m-5 p-3 ">
                <Col>
                    <Card className='card'>
                        <Card.Img variant="top" className='imgInCard' src={RedMeat} />
                        <Card.Body>
                            {/* <img src={RedMeat} alt="" /> */}
                            <Card.Title>Red Meat and Fish</Card.Title>
                            <Card.Text>
                                Poultry, Red Meat and Fish
                                Fret not, non-vegetarians! There’s also poultry, red meat and fish that’s going to help your immune system. Skin out chicken, tuna, salmon, sardines, mackerel. Red meat like mutton, beef and pork are rich in iron and boost your immune system functioning. However, only lean cuts of these meats are suggested as they are also high in cholesterol.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className='card'>
                        <Card.Img variant="top"className='imgInCard' src={Garlic} />
                        <Card.Body>
                            {/* <img src={Garlic} alt="" /> */}
                            <Card.Title>Garlic:</Card.Title>
                            <Card.Text>
                                Garlic:
                                Who doesn’t know the many benefits of garlic! Spice your food up with garlic and you do so much for your body. Your heart’s functioning improves, blood get purified, skin becomes clearer and glowing, hair becomes better and the list goes on.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className='card'>
                        <Card.Img variant="top" className='imgInCard'src={carrots} />
                        <Card.Body>
                            {/* <img src={carrots} alt="" /> */}
                            <Card.Title>Carrots:</Card.Title>
                            <Card.Text>
                                <p>Carrots:
                                    Carrots have anti-oxidants, Vitamin – A, C and K, Iron, Potassium and an abundance of Vitamin B (beta carotene and folate). Great for your immune system, skin hair and even your eyes.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>


                <Col>
                    <Card className='card'>
                        <Card.Img variant="top" className='imgInCard' src={Papaya} />
                        <Card.Body>
                            {/* <img src={Papaya} alt="" /> */}
                            <Card.Title>Papaya:</Card.Title>
                            <Card.Text>

                                <p>Papaya:
                                    Papaya is a rich antioxidant too. It has carotenes and flavonoids and is a source of Vitamin B and C as well. It is also a good source of fiber so it’s great for both weight loss and digestion. What papaya also does is it helps reduce pimples and gives your skin a natural glow.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>


                <Col>
                    <Card className='card'>
                        <Card.Img variant="top" className='imgInCard' src={Pineapple} />
                        <Card.Body>
                            {/* <img src={Pineapple} alt="" /> */}
                            <Card.Title>Pineapple:</Card.Title>
                            <Card.Text>

                                <p>Pineapple: You sweet tooth is taken care of by this yummy fruit. A little sweet and a little sour, pineapples are pretty versatile and is packed with goodness. Being a rich source of antioxidants and Vitamin C, pineapples are good for your eyes, bones and also aids digestion.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>


                <Col>
                    <Card className='card'>
                        <Card.Img variant="top"className='imgInCard' src={Citrus} />
                        <Card.Body>
                            {/* <img src={Citrus} alt="" /> */}
                            <Card.Title>Citrus:</Card.Title>
                            <Card.Text>
                                <p>

                                    Citrus: Fruits And Berries
                                    Citrus fruits and Berries like Oranges, Lemons, Grapefruits, Strawberry, Blueberry, Raspberry are great for the immune system. High in Vitamin – B, C, Potassium and Calcium, Citrus Fruits and Berries keep your immune system in good shape.

                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>


                <Col>
                    <Card className='card'>
                        <Card.Img variant="top"className='imgInCard' src={CruciferousVegetables} />
                        <Card.Body>
                            {/* <img src={CruciferousVegetables} alt="" /> */}
                            <Card.Title>Cruciferous Vegetables:</Card.Title>
                            <Card.Text>
                                <p>
                                    Cruciferous Vegetables:
                                    Broccoli, Cabbage, Cauliflower, Kale, Brussels Sprouts, Turnip, Radish are all cruciferous vegetables. Apart from being unbelievably filling, these veggies are high in fiber and are a rich source of Vitamins – A, B, C, Folic Acid, Magnesium and Potassium. They also lower the risk of cancer and improve the cardiovascular health.
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>


                <Col>
                    <Card className='card'>
                        <Card.Img variant="top" className='imgInCard'src={Turmeric} />
                        <Card.Body>
                            {/* <img src={Turmeric} alt="" /> */}
                            <Card.Title>Turmeric:</Card.Title>
                            <Card.Text>

                                <p>
                                    Turmeric:
                                    Something that most of our kitchens have, Turmeric! It’s not just a great Antiseptic and Antibacterial but Turmeric has been proven to help in weight loss and reducing cholesterol levels. It is also effective in treating depression and is a natural liver detoxifier.
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>


                <Col>
                    <Card className='card'>
                        <Card.Img variant="top" className='imgInCard'src={Ginger} />
                        <Card.Body>
                            {/* <img src={Ginger} alt="" /> */}
                            <Card.Title>Ginger:</Card.Title>
                            <Card.Text>

                                <p>
                                    Ginger:
                                    Ginger is pretty popular in the Indian kitchens as a taste enhancer. Ginger also aids digestion, relieves congestion and cold, and helps in controlling high blood pressure but do we know that Ginger is also a great pain reliever and acne remedy? Oh yes! And it also helps in growing long beautiful hair.
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>


                <Col>
                    <Card className='card'>
                        <Card.Img variant="top"className='imgInCard' src={Yogurt} />
                        <Card.Body>
                            {/* <img src={Yogurt} alt="" /> */}
                            <Card.Title>Yogurt:</Card.Title>
                            <Card.Text>

                                <p>
                                    Yogurt:
                                    Last on the list but definitely not the least, yogurt. A rich source of calcium, Vitamin – D and protein, yogurt soothes the gut and is a probiotic. Multiple benefits in just that one cup, huh? Eating yogurt also keeps you fuller so feel free to indulge. Keep it low fat and the benefits are even more.
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>



            </Row>

        </div>
    );
};

export default HealthyEating;