import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

const Doctors = () => {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Muzahid037/Medical-Related-API/main/doctorsFakeData.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <div id="doctors">
            <h2>Meet Our Team</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    >
                    </Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;