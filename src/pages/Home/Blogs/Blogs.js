import React from 'react'
import BlogsCard from '../../../components/BlogsCards/BlogsCard'
import './blogs.scss'
import { blog } from '../../../dummydata/blogdata'
const Blogs = () => {
    return (
        <div className="blogs">
            <div className="blog_wrapper">
                <div className="blog_top">
                    <h1>Our Blog</h1>
                    <p>It looks perfect on all major browsers, tablets and phones. The kind of product you are looking for.</p>
                </div>
                <div className="blog_bottom_cards">
                    {
                        blog.map(i => (
                            <BlogsCard items key={i.id} i={i} />
                        ))
                    }
                </div>
                <button>view all blogs</button>
            </div>
        </div>
    )
}

export default Blogs
