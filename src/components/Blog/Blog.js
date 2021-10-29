import React from 'react';

const Blog = ({ blog }) => {
    const { id, title, author, img,description } = blog;
    return (
        <div>

            <div className="col">
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="text-warning">By {author}</h6>
                    <p className="card-text">{description}</p>
                    </div>
                    <div className="card-footer">
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Blog;