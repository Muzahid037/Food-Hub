import React from 'react';
import './AboutUs.css';
import aboutUsBanner from './../../images/banner/3.jpg'

const AboutUs = () => {
    return (
        <div>
                <h3>About us</h3>
                {/* <img src={aboutUsBanner} alt="" /> */}

                <div className="card mb-3" style={{}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={aboutUsBanner} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8 d-flex justify-content-center align-items-center">
                            <div className="card-body ">
                                <h5 className="card-title">Food-Hub</h5>
                                <p className="card-text">Retail food delivery is a courier service in which a restaurant, store, or independent food-delivery company delivers food to a customer. An order is typically made either through a restaurant or grocer's website or mobile app, or through a food ordering company. The delivered items can include entrees, sides, drinks, desserts, or grocery items and are typically delivered in boxes or bags. The delivery person will normally drive a car, but in bigger cities where homes and restaurants are closer together, they may use bikes or motorized scooters. Recently, autonomous vehicles have also been used to complete deliveries.</p>
                                <p className="card-text">
                                    <button className="btn-primary">View More</button>
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    );
};

export default AboutUs;