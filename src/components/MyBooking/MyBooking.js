import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const MyBooking = () => {

    const {user} = useAuth();
    const {booking, setBooking} = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myBookings/${user.email}`)
        .then((res) => res.json())
        .then((data) => console.log(data))
    }, []);

    return (
        <div>
            <h1 className="text-success">My Booking</h1>
        </div>
    );
};

export default MyBooking;