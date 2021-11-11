import React from 'react';

const AddPlace = () => {
    return (
        <div>
            <h1 className="text-Success text-center mt-4">Please Confirm Booking!</h1>
            
            <div className="container body rounded mt-5 mb-5 ">
    <div className="row">
        <div className="col-md-12">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex flex-row align-items-center back"><i className="fa fa-long-arrow-left mr-1 mb-1"></i>
                        <a href="./../Home"><h6>Back to home</h6></a>
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
                <div className="mt-5 text-right"><button className="btn btn-primary profile-button" type="button">Add New Place</button></div>
            </div>
        </div>
    </div>
</div>
        </div>
    );
};

export default AddPlace;