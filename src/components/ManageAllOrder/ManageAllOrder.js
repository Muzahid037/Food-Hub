import React from 'react';

const ManageAllOrder = ({ order }) => {
    const { _id, name, email, service, status } = order;

    const handleDeleteOrder = (id) => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            fetch(`https://quiet-lake-45150.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');

                        // const ordersAfterDlt = myOrders.filter(myOrder => myOrder._id !== _id);
                        // setMyOrders(ordersAfterDlt);
                    }
                })
        }
    }

    const handleUpdateUser = (id) => {
        order.status = "Approved";
        // console.log("Update",_id);
        fetch(`https://quiet-lake-45150.herokuapp.com/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) { alert('Status Updated successfully') }
            });

    }

    return (
        <div>
            {/* <h2>single mang all oders</h2> */}

            <div className="col">
                <div className="card h-100">
                    <img src={service.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{service.name}</h5>
                        <p className="card-text">{service.des}</p>
                    </div>
                    <div className="card-footer">
                        <p>Ordered by: <span className="fw-bold">{email}</span></p>
                        <p>Status: <span className="fw-bold text-success"> {status} </span></p>

                        <div className="d-flex justify-content-evenly align-items-center">
                            <button className="joinus-submit" onClick={() => handleDeleteOrder(_id)}>Delete Order</button>
                            <button className="joinus-submit" onClick={() => handleUpdateUser(_id)} >Approve Order</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ManageAllOrder;