import React from 'react';

const Doctor = ({ doctor }) => {
    const { id, Name, image, speciality } = doctor;
    return (
        <div>

            <div className="col">
                <div className="card h-100">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title">{Name}</h3>
                        <p className="card-text"></p>
                    </div>
                    <div className="card-footer">
                        <h5>Speciality: {speciality}</h5> 
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Doctor;