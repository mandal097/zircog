import React, { useEffect, useState } from 'react'
import './cstudies.scss'
import Fade from 'react-reveal'
import { data } from '../../../dummydata/data'
const CStudies = () => {

    const [img, setImage] = useState([])

    useEffect(() => {
        setImage(data)
    }, [])
    const creativeArr = data.filter((i) => i.cat === "creative")
    const photographyArr = data.filter((i) => i.cat === "photography")
    const solutionsArr = data.filter((i) => i.cat === "websol")

    const handleall = () => {
        setImage(data)
    }
    const handleCreative = () => {
        setImage(creativeArr)
    }
    const handlePhotography = () => {
        setImage(photographyArr)
    }
    const handleSolutions = () => {
        setImage(solutionsArr)
    }

    return (
        <div className="case_studies">
            <div className="c_wrapper">
                <Fade bottom>
                    <div className="c_top">
                        <h1>Our Case Studies</h1>
                        <p>It looks perfect on all major browsers, tablets and phones. The kind of product you are looking for.</p>
                        <div className="c_top_bottom">
                            <Fade bottom>
                                <span onClick={handleall} >all</span>
                            </Fade>
                            <Fade bottom>
                                <span onClick={handleCreative} >creative</span>
                            </Fade>
                            <Fade bottom>
                                <span onClick={handlePhotography} >photography</span>
                            </Fade>
                            <Fade bottom>
                                <span onClick={handleSolutions} >web solutions</span>
                            </Fade>
                        </div>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className="c_images">
                        {
                            img.map((i) => (
                                <div>
                                    <img items key={i.id} src={i.img} alt="" />
                                    <div className="absolute">
                                        <h3>MIA Poster</h3>
                                        <span className="absolute_">#{i.cat}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default CStudies
