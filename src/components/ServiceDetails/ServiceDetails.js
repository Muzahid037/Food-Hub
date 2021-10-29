import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const ServiceDetails = () => {
    const { serviceId } = useParams();

    //const [services, setServices] = useState([]);
    const [specificService, setSpecificService] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Muzahid037/Medical-Related-API/main/servicesFakeData.json')
            .then(res => res.json())
            .then(services => {
                //setServices(services);
                //console.log("serviceId",typeof(serviceId));
                const service = services.filter(service => service.id === parseInt(serviceId))
                setSpecificService(service);
            })
    }, [])



    return (
        <div>
            {/* <h2>service details {specificService.length}</h2> */}
            {
                specificService.map(service => <ServiceDetail
                    key={service.id}
                    service={service}
                >
                </ServiceDetail>
                )
            }
        </div>
    );
};

export default ServiceDetails;