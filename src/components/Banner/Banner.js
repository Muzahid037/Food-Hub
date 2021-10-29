import React from 'react';
import './Banner.css';
import banner from './../../images/banner/1.jpg';

const Banner = () => {
    return (
        <div className="px-4 my-4 section">

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 gx-5">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="col">
                        <h4>Welcome to</h4>
                        <h2 className="text-danger">Food-Hub</h2>
                        <p>Food Should Be Your Top Priority.Health is a state of complete physical, mental, and social well-being.</p>
                        <button className="btn-success px-4 py-2 rounded">Start Now</button>
                    </div>
                </div>
                <div className="col">
                    <img className="img-fluid" src={banner} alt="" />
                </div>
            </div>



        </div >
    );
};

export default Banner;