import React from 'react';

const ServiceDetail = ({ service }) => {
    const { id, Name, image, shortDescription, longDescription, currPatient, currDoctor } = service;
    return (
        <div className="">
            {/* <h2>{Name}</h2> */}
            {/* <img src={image} alt="" /> */}

            {/* <div className="card mb-3">
                <img src={image} className="card-img-top" alt="..."/>
                <div class ="card-body">
                <h5 class ="card-title">{Name}</h5>
                <p class ="card-text">{longDescription}</p>
                <p class ="card-text"><small class ="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div> */}

            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{Name}</h3>
                    <p className="card-text">{longDescription}</p>
                    <p className="card-text">
                        {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                        </p>
                </div>
                <img src={image} className="card-img-bottom" alt="..."/>
            </div>

        </div>
    );
};

export default ServiceDetail;