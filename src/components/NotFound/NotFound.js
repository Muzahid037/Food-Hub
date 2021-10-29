import React from 'react';
import { Link } from 'react-router-dom';
import img404 from './../../images/404.jpg'
const NotFound = () => {
    return (
        <div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2">
                <div className="col">
                    <img className="img-fluid" src={img404} alt="" />
                </div>

               
                    <div className="col d-flex justify-content-around align-items-center">
                        <div>
                        <p>The HTTP 404, 404 not found, 404, 404 error, page not found or file not found error message is a hypertext transfer protocol standard response code, in computer network communications, to indicate that the browser was able to communicate with a given server, but the server could not find what was requested.</p>
                        <Link to="/">
                        <button className="btn-success">Go Homepage</button>
                    </Link>
                    </div>
                    </div>

                

            </div>
        </div>
    );
};

export default NotFound;