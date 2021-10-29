import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {

    const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        // data.email = user.email;
        console.log(data);

        axios.post('https://quiet-lake-45150.herokuapp.com/services', data)
            .then(res => {
                console.log("res from client: ",res);
                if (res.data.insertedId) {
                    alert('Service added');
                    reset();
                }
            }
            )
    }

    //console.log(watch("name")); // watch input value by passing the name of it

    return (
        <div>
            <h2>Add service</h2>

            <div className="d-flex justify-content-center align-items-center">
                <form className="joinus-form" onSubmit={handleSubmit(onSubmit)}>

                    <input className="my-4" placeholder="Name"  {...register("name",{ required: true })} />
                    {errors.name && <span className="error">This field is required</span>}
    

                    <textarea className="my-4" placeholder="Enter Description" {...register("des", { required: true })} />
                    {errors.des && <span className="error">This field is required</span>}

                    <input className="my-4" placeholder="Enter Image Url" defaultValue={"https://image.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg"} {...register("img", { required: true })} />
                    {errors.img && <span className="error">This field is required</span>}

                    
                    <input className="joinus-submit my-4" type="submit" value="Place Order" />
                </form>
            </div>

        </div>
    );
};

export default AddService;