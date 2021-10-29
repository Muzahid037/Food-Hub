import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Service from '../Service/Service';



const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://quiet-lake-45150.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    if (services.length===0) {
        return <>
            <Spinner animation="border" variant="primary" />
        </>;
    }

    return (
        <div className="my-5 section">
            <div className="">
            <h2>Our Best Services</h2>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                {services.map(service => <Service
                    key={service._id}
                    service={service}
                >
                </Service>
                )}
            </div>

        </div >
    );
};

export default Services;