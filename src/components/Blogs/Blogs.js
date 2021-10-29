import React from 'react';
import './Blogs.css';
import { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Muzahid037/Medical-Related-API/main/blogsFakeData.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])


    return (
        <div id="blogs">
            <h2>Our Blogs</h2>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2">
                {blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                >
                </Blog>
                )}
            </div>

        </div>
    );
};

export default Blogs;