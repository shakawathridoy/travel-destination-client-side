import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Services.css'


const Home = () => {

    const [services, setServices] = useState([]);

    // load data from json 

    useEffect(() => {
        fetch("http://localhost:5000/allPlaces")
        .then(res => res.json())
        .then(data => setServices(data))
    } , [])

    // set Dynamic url

    // const history = useHistory();
    // const handleBooking = (id) => {
    //     const uri = `booking/${id}`
    //     history.push(uri);
    // }

    return (
        <div className="container p-4">
            <div className="text-center">
                <h1><b>You can find here Favorite Place of Yours</b></h1>
                <h6 className="text-success">Search your Favroite Destination!</h6>
                <div className="text-center justify-content-center aling-items-center">
                <InputGroup className=" text-center">
                <FormControl width="50"
                placeholder="What do you want to search today?"
                aria-label="Recipient's username with two button addons"
                />
                <Button className="btn bg-success text-white" variant="outline-secondary">Search</Button>
            </InputGroup>
                </div>
            </div>
            <div className="text-center">
            <h2 className="text-center mt-5 mb-4 text-primary" ><b>Select Your Destination</b></h2>
            </div>
            <div id="doctors" className="coureses">
                <div className="row">
                    {
                        services.map(service => 
                            <div key={service._id} className="col-lg-4 col-md-6 text-center">
                                
                            <Card className="cart-service"  style={{ marginBottom: '35px', height: '700px', borderRadius: "20px" }}>
                            <Card.Img className="p-3" variant="top" src={service.img} />
                            <Card.Body>
                                <Card.Title>Name: {service.name}</Card.Title>
                                <Card.Text>
                                {service.description}
                                </Card.Text>
                                <Card.Text className="text-success">
                                Tour Fee: ${service.price}
                                </Card.Text>
                                <Link to={`/booking/${service._id}`}>
                                <Button  className="button" variant="primary">Book Now</Button>
                                </Link>
                                
                            </Card.Body>
                            </Card>
                        </div>
                            )
                            
                        }
                </div>
                <div className="text-center">

                </div>
            </div>
        </div>
    );
};

export default Home;