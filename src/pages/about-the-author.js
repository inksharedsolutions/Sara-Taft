import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
// import Event from '../components/event'


import Banner from '../components/non-front-banner'
// import AuthorImg from '../../static/author/author-profile.jpg'
import DummyImg from '../../static/author/dummy-profile.jpg'
import { Helmet } from "react-helmet"

const ATB = (props) => {

    return (
        <>
            <Layout>
                <Helmet title="About the Author | Sara Taft" />
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Author`} />

                <div className="container">
                    <section className="body-author-contents columns">
                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img
                                    src={DummyImg}
                                    alt="_main_author" />
                            </div>

                            {/* <div className="heading-quote">
                                <h4>
                                    - “What other’s think of me is none of my business.” And “When struggling with a decision, ask yourself this, ‘what is really going to mean a hundred years from now?"
                                    <br />

                                </h4>
                                <p>
                                    <spa className="author-name"></spa
                                         <span className="author-span-ft">Author | Writer </span> 
                                        <span className="ata-name">James Bosley</span>
                                    </span>
                                </p>
                            </div> */}
                        </div>


                        <article className="article-section column" id="author">

                            <p>
                            Sara is a California native who is a transformational counselor and an artist. With degrees in Psychology, English and Social Relations, she combines her passionate interest in the humanities with her thirty year study and practice of the symbolic and mythic language of astrology and psychology of Carl Jung. Clarifying potential talents and patterns of behavior she uses art and dream with its rich soul imagery to engage healing, guidance and transformation. She views the birthchart as a wondrous map, inherent with images that unfold throughout one’s life containing the intention and wisdom of the soul.
                            </p>

                            <p>
                            She began painting twenty years ago after the death of her mother. It was her first experience with the power of art to heal. This led to working with groups using art and the imagination for spiritual and emotional resource. Her dedication to the world of dreamwork continues today as she hosts a dream group in her home. She also was a co-founder of the cooperative art gallery The Artists’ Gallery in Los Angeles, also known as “T.A.G.”
                            </p>

                            <p>
                            For the last ten years she has been on pilgrimages exploring and participating in the mysteries of the divine feminine. This interest has guided her to include cultures and religions outside of her familiar Judeo-Christian roots. She lived briefly with the Aboriginals in the Outback where she participated in some of their sacred rituals, she listened to the poetry and songs of the Celts and witnessed the majesty and mystery of Isis in Egypt. In Greece she met her ancestral Goddess lineage and recently at Angkor Wat in Cambodia she walked on the sacred ground where Buddhism and Hinduism intersected. Beneath the outward differences, Sara discovered the wondrous necessity of each religion as parts of the integral spiritual consciousness that is unfolding today on our planet.
                            </p>



                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Sara Taft</span>
                                </span>
                            </p>

                        </article>
                    </section>
                </div>

                {/* <Event /> */}


            </Layout>
        </>
    )
}


export default ATB;
