import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import './PlaceOrder.css';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
const PlaceOrder = () => {

    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`https://quiet-lake-45150.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(service => {
                setService(service);
            })
    }, [])

    const { _id, name, img, des } = service;

    const { user } = useAuth();

    const { register, handleSubmit, reset,watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.email = user.email;
        data.service=service;
        data.status="Pending";
        //console.log(data);

        axios.post('https://quiet-lake-45150.herokuapp.com/orders', data)
            .then(res => {
                console.log("res from client: ",res);
                if (res.data.insertedId) {
                    alert('Order added');
                    reset();
                }
            }
            )
    }

    //console.log(watch("name")); // watch input value by passing the name of it

    return (
        <div>
            <h2>Placeorder {service._id}</h2>

            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1">
                <div className="col">
                    <div className="card h-100">
                        <img src={img} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{des}</p>
                        </div>
                        <div className="card-footer">

                            {/* <Link to={`/placeorder/${_id}`}>
                            <button className="btn-primary">Purchase</button>
                        </Link> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center align-items-center">
                <form className="joinus-form" onSubmit={handleSubmit(onSubmit)}>

                    <input className="my-4" placeholder="Name" defaultValue={user.displayName} {...register("name")} />

                    <input className="my-4" placeholder="Email" defaultValue={user.email} {...register("email")} />

                    <input className="my-4" placeholder="Enter Address" {...register("address", { required: true })} />
                    {errors.address && <span className="error">This field is required</span>}

                    <input className="my-4" placeholder="Enter Mobile" {...register("mobile", { required: true })} />
                    {errors.mobile && <span className="error">This field is required</span>}

                    <input className="my-4" placeholder="Enter Date" {...register("date", { required: true })} />
                    {errors.date && <span className="error">This field is required</span>}

                    <input className="joinus-submit my-4" type="submit" value="Place Order" />


                </form>
            </div>


        </div>
    );
};

export default PlaceOrder;