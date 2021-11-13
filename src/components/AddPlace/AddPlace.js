import React from 'react';
import { useForm } from "react-hook-form";

const AddPlace = () => {

     const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    fetch("http://localhost:5000/allPl", {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then(result => console.log(result) )
     console.log(data);
    };
    return (
        <div>
            <h1 className="text-Success text-center mt-4">Please Confirm Booking!</h1>
            
            <div className="container rounded mt-5 mb-5 ">
    <div className="row">
        <div className="col-md-6 body">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex flex-row align-items-center back"><i className="fa fa-long-arrow-left mr-1 mb-1"></i>
                        <a href="./../Home"><h6>Back to home</h6></a>
                    </div>
                    <h6 className="text-right">Edit Profile</h6>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" mt-2">
                    <div className="">
                        <h6 className="">Tour Area</h6>
                        <input
                        {...register("name", { required: true })} 
                        type="text" className="form-control" placeholder="Tour Area" />
                        {errors.name && <p className="text-danger">This field is required</p>}
                    </div>
                    <div className="">
                    <h6 className="mt-2">Place Details</h6>
                        <input 
                        {...register("description")} 
                        type="text" className="form-control" placeholder="Write something About the Place!" />
                    </div>
                    <div className="">
                    <h6 className="mt-2">Category</h6>
                        <input  
                        {...register("category")} 
                        type="text" className="form-control" defaultValue="Couple Package" />
                    </div>
                    <div className="">
                    <h6 className="mt-2">Place Image</h6>
                        <input type="text" {...register("img", { required: true })} className="form-control" placeholder="Image URL"/>
                        {errors.img && <p className="text-danger">This field is required</p>}
                        </div>
                    <div className="">
                    <h6 className="mt-2">Your Budget</h6>
                        <input type="number" {...register("price", { required: true })} className="form-control" placeholder="Write your Budget"/>
                        {errors.price && <p className="text-danger">This field is required</p>}
                        </div>
                        <input className="mt-2 text-right btn btn-primary profile-button" type="submit" placeholder="Add New Place" />
                </div>
                </form>
            </div>
        </div>
            <div className="col-md-6">
                <img width="100%" src="https://i.ibb.co/Kmf8743/alisa-anton-X3-Soc-Mx-Zf-A-unsplash-removebg-preview.png" alt="" />
            </div>
    </div>
</div>
        </div>
    );
};

export default AddPlace;