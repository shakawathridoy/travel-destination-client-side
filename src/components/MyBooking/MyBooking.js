import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const MyBooking = () => {

    const {user} = useAuth();
    const [booking, setBooking] = useState([]);
    const [control, setControl] = useState(false)

    useEffect(() => {
        fetch(`https://boiling-dusk-61010.herokuapp.com/myBookings/${user.email}`)
        .then((res) => res.json())
        .then((data) => setBooking(data))
    }, [control]);

    const handleDelete = (id) => {
        fetch(`https://boiling-dusk-61010.herokuapp.com/cancelOrder/${id}`,{
            method: "DELETE",

        } )
        .then((res) => res.json())
        .then((data) => {
            if(data.deletedCount){
                alert('Are you Sure?')
                setControl(!control)
            }
        });
    }

    return (
        <div>
            <h1 className="text-success text-center mt-4 mb-3">My Booking</h1>
            <div className="">
                    <div className="container text-center">
                        <table className="table ">
                            <thead>
                                <tr>
                                <th scope="col">Place</th>
                                <th scope="col">Name</th>
                                <th scope="col">Date</th>
                                <th scope="col">Order Cencel</th>
                                </tr>
                            </thead>
                {booking?.map((pd) => (
                    <tbody key={pd?._id}>
                                <tr>
                                <td>{pd?.name}</td>
                                <td>{pd?.self}</td>
                                <td>{pd?.date}</td>
                                <td>
                                    <button onClick={() => handleDelete(pd?._id) } className="btn bg-danger text-white">X</button>
                                </td>
                                </tr>
                            </tbody>
                ))}
                </table>
                      </div>
            </div>
        </div>
    );
};

export default MyBooking;