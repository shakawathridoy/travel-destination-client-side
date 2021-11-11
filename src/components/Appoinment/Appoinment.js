import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Appoinment.css'

const Appoinment = () => {

    const {id} = useParams()
    const [appoinments, setAppoinments] =  useState([]);
    const [specificAppoinment, setSpecificAppoinment] = useState({});

    useEffect(() => 
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setAppoinments(data))
     , []);

    useEffect(() => {
        if(appoinments.length>0){const matchedData = appoinments.find(appoinment => appoinment.id==id)
        setSpecificAppoinment(matchedData);
        }
    }, [appoinments]);

    return (
        <div>
            <h1 className="text-Success text-center mt-4">Please Confirm Booking!</h1>
            
            <div className="container body rounded mt-5 mb-5 ">
    <div className="row">
        <div className="col-md-4 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" src={specificAppoinment?.img} width="90"/><span className="font-weight-bold">Name: {specificAppoinment?.name}</span><span className="text-black-50">Consultation Fees: ${specificAppoinment?.fee}</span><span>Catagory: {specificAppoinment?.genres}</span></div>
        </div>
        <div className="col-md-8">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex flex-row align-items-center back"><i className="fa fa-long-arrow-left mr-1 mb-1"></i>
                        <h6>Back to home</h6>
                    </div>
                    <h6 className="text-right">Edit Profile</h6>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6"><input type="text" className="form-control" placeholder="first name" /></div>
                    <div className="col-md-6"><input type="text" className="form-control" placeholder="Doe"/></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6"><input type="text" className="form-control" placeholder="Email" /></div>
                    <div className="col-md-6"><input type="text" className="form-control" placeholder="Phone number"/></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6"><input type="text" className="form-control" placeholder="address"/></div>
                    <div className="col-md-6"><input type="text" className="form-control" placeholder="Country"/></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6"><input type="text" className="form-control" placeholder="Bank Name" /></div>
                    <div className="col-md-6"><input type="text" className="form-control" placeholder="Account Number"/></div>
                </div>
                <div className="mt-5 text-right"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>
    </div>
</div>
        </div>
    );
};

export default Appoinment;