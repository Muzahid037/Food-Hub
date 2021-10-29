import React from 'react';

const MyOrder = ({ myOrder }) => {
    const { _id, name, email, service, status } = myOrder;

    const handleRemoveOrder = (id) => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            fetch(`https://quiet-lake-45150.herokuapp.com/orders/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                    }
                })
        }
    }


    return (
        <div>
            {/* <h2>My single Order id {_id}</h2> */}

            <div className="col">
                <div className="card h-100">
                    <img src={service.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{service.name}</h5>
                        <p className="card-text">{service.des}</p>
                        <p>Status: <span className="fw-bold text-success"> {status} </span></p>
                    </div>
                    <div className="card-footer">

                        <button className="joinus-submit" onClick={() => handleRemoveOrder(_id)}>Remove Order</button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyOrder;