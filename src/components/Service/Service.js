import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
     const { _id, name, img, des} = service;
    const handleSeeDetails = () => {

    }
    return (
        <div className="my-5">
            {/* <h2>service </h2> */}


            <div className="col">
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{des}</p>
                    </div>
                    <div className="card-footer">

                        <Link to={`/placeorder/${_id}`}>
                            <button className="btn-primary">Order</button>
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Service;