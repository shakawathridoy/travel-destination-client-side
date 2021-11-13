import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './Appoinment.css'
import useAuth from '../../Hooks/useAuth';

const Appoinment = () => {

    const {placeId} = useParams();
    const [appoinments, setAppoinments] =  useState({});
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {user, logOut} = useAuth()
    
    useEffect(() => 
        fetch(`http://localhost:5000/singlePlace/${placeId}`)
        .then(res => res.json())
        .then(data => setAppoinments(data))
     , []);


     const onSubmit = (data) => {
        console.log(data);
     }

    return (
        <div>
            <h1 className=" text-success text-center mt-3">Please Confirm Booking!</h1>

            <div className="container rounded mt-5 mb-5 ">
    <div className="row">
            <div className="col-md-6 ">
        <div className="body-route">
                    <h3 className="text-center m-2">{appoinments?.name}</h3>
                        <img src={appoinments?.img} alt="" />
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="text-center bg-warning">${appoinments?.price}</h4>
                    </div>
                    <div className="col-md-6">
                        <h4 className="text-center bg-warning">{appoinments?.category}</h4>
                    </div>
                    <div>
                    </div>
                    <div className=""><p className="">{appoinments?.description}</p></div>
                </div>
            </div>
            </div>
        <div className="col-md-6 body">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex flex-row align-items-center back"><i className="fa fa-long-arrow-left mr-1 mb-1"></i>
                        <Link to="/home">
                        <h6>Back to home</h6>
                        </Link>
                    </div>
                    <h6 className="text-right">Edit Profile</h6>
                </div>
                <div className=" mt-2">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="">
                        <h6 className="">Tour Area</h6>
                        <input
                        {...register("name")} 
                        type="text" defaultValue={appoinments?.name} className="form-control" placeholder="Tour Area" />
                    </div>
                    <div className="">
                    <h6 className="mt-2">Your Name</h6>
                        <input 
                        {...register("self", { required: true })} 
                        type="text" className="form-control" placeholder="You Full Name" />
                        {errors.self && <p className="text-danger">This field is required</p>}
                    </div>
                    <div className="">
                    <h6 className="mt-2">Tour Date</h6>
                        <input 
                        {...register("date", { required: true })} 
                        type="date" className="form-control"  />
                        {errors.date && <p className="text-danger">This field is required</p>}
                    </div>
                    <div className="">
                    <h6 className="mt-2">Category</h6>
                        <input  
                        {...register("category")} 
                        type="text" className="form-control" defaultValue="Couple Package" />
                    </div>
                    <div className="">
                    <h6 className="mt-2">Your Phone Number</h6>
                        <input type="number" {...register("number", { required: true })} className="form-control" placeholder="Number"/>
                        {errors.self && <p className="text-danger">This field is required</p>}
                        </div>
                    <div className="">
                    <h6 className="mt-2">Your Email</h6>
                        <input type="text" {...register("email")} defaultValue={user.email} className="form-control"/>
                        </div>
                        <input className="mt-3 text-right btn btn-primary profile-button" type="submit" placeholder="Add New Place" />
                </form>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    );
};

export default Appoinment;