import React from 'react'
import './blogcards.scss'
const BlogsCard = ({i}) => {
    return (
        <div className="blog_bottom_cards_card">
            <img src={i.img} alt="" />
            <div className="blog_bottom_cards_card_bottom">
                <p>{i.date}</p>
                <small>{i.content}</small>
            </div>
        </div>
    )
}

export default BlogsCard
