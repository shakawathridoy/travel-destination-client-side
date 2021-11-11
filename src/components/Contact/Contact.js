import React from 'react';

const Contact = () => {
    return (
        <div>
        <div className="header-about">
                <div className="pt-5">
            <div className="container">
                <h1 className="text-white">Let's <span className="text-success">Talk!</span></h1>
                <p className="pb-5">If you have any queries, I love to do a quick reply.
                Email: contact.freelancerhridoy@gmail.com <br />
                OR <br />
                Call: 01700000000</p> 
            </div>
            </div>
            </div>
            <div className="container">
                <h1 className="text-center"><b>Feel free to message!</b></h1>
                 <h4 className="mt-5 pt-2" >Your Name (Require)*</h4>
                <input type="text" placeholder="write your name" /><br />
                 <h4 className="mt-4">Your Email (required)*</h4>
                <input type="text" placeholder="write your email" /><br />
                 <h4 className="mt-4">Subject</h4>
                <input type="text" placeholder="write your name" /><br />
                 <h4  className="mt-4">Your Name (Require)*</h4>
                <input className="mb-3" type="text" placeholder="Your Message" /><br />
                <button className="">Send</button>
                <div className="text-center mt-5 pt-5">
                    <h2><b>Shakawat Hridoy</b></h2>
                    <h4>©Copyright 2021. All Rights Reserved!</h4>
                </div>
            </div>
        </div>
    );
};

export default Contact;