import React from 'react'
import './leaders.scss'
import Fade from 'react-reveal'
import LeadersCard from '../../../components/LeadersCard/LeadersCard'
const Leaders = () => {
    return (
        <div className="leaders">
            <div className="leaders_wrapper">
                <Fade bottom>
                    <h3>Creative Leaders</h3>
                    <p>You can edit this section via Dashboard 	&gt; Appearance 	&gt; Customize 	&gt; Front Page Settings 	&gt;<br />  Team Widget .</p>
                </Fade>
                <Fade bottom>
                    <div className="leaders_card_container">
                        <LeadersCard
                            img="	https://zircog.com/wp-content/uploads/2018/10/photographer-407068_1920-1-370x280.jpg"
                            name="Shyla white"
                            status="CEO & Founder"
                            p="Leadership is not about a title or a designation. It's about impact, influence and inspiration."
                        />
                        <LeadersCard
                            img="https://zircog.com/wp-content/uploads/2018/10/model-2911332_1920-1-370x280.jpg"
                            name="David Lynch"
                            status="Senior Director"
                            p="Impact involves getting results, influence is about spreading the passion you have for your work."
                        />
                        <LeadersCard
                            img="	https://zircog.com/wp-content/uploads/2018/10/woman-3083379_1920-1-370x280.jpg"
                            name="Christine Parker"
                            status="Creative Director"
                            p="The road to success and the road to failure are almost exactly the same. You create them."
                        />
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Leaders
