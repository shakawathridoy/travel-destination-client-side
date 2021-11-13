import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageBooking = () => {
    const [manage, setManage] = useState();
    const [status, setStatus] = useState("")
    const [control, setControl] = useState(false)

    const handleStatus = (e) => {
        setStatus(e.target.value)
    }

    useEffect(() => {
        fetch("https://boiling-dusk-61010.herokuapp.com/allBooking")
        .then(res => res.json())
        .then(data => setManage(data))
    } , [control])

    const handleUpdate = (id) => {
        fetch(`https://boiling-dusk-61010.herokuapp.com/updateStatus/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({status})
        })
        alert("successful")
      
    }
    
    return (
        <div>
            <h1 className="text-success text-center">Manage All the booking</h1>
            <div className="">
                    <div className="container text-center">
                        <Table className="table ">
                            <thead>
                                <tr>
                                <th scope="col">Place</th>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                                <th scope="col">Confirm Order</th>
                                </tr>
                            </thead>
                {manage?.map((pd) => (
                    <tbody key={pd?._id}>
                                <tr>
                                <td>{pd?.name}</td>
                                <td>{pd?.self}</td>
                                <td>
                                <select onClick={handleStatus}>
                                    <option value="Pending">{pd?.status}</option>
                                    <option value="Approved">Approved</option>
                                </select>
                                </td>
                                <td>
                                   <Link to="/managebooking">
                                   <button onClick={() => handleUpdate(pd._id)} className="btn bg-success text-white">✔</button>
                                   </Link>
                                    <Link to="/mybookings">
                                    <button  className="btn bg-danger text-white">X</button>
                                    </Link>
                                </td>
            
                                </tr>
                            </tbody>
                ))}
                </Table>
                      </div>
            </div>
        </div>
    );
};

export default ManageBooking;