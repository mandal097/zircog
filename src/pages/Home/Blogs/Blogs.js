import React from 'react'
import './blogs.scss'
import Fade from 'react-reveal'
import BlogsCard from '../../../components/BlogsCards/BlogsCard'
import { blog } from '../../../dummydata/blogdata'
const Blogs = () => {
    return (
        <div className="blogs">
            <div className="blog_wrapper">
                <Fade bottom>
                    <div className="blog_top">
                        <h1>Our Blog</h1>
                        <p>It looks perfect on all major browsers, tablets and phones. The kind of product you are looking for.</p>
                    </div>
                </Fade>
                <div className="blog_bottom_cards">
                    {
                        blog.map(i => (
                            <Fade bottom>
                                <BlogsCard items key={i.id} i={i} />
                            </Fade>
                        ))
                    }
                </div>
                <Fade bottom>
                    <button>view all blogs</button>
                </Fade>
            </div>
        </div>
    )
}

export default Blogs
