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
                        {/* <div className="heading-quote column">
                            <div className="author-image-container">
                                <img
                                    src={DummyImg}
                                    alt="_main_author" />
                            </div>

                        </div> */}


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
                            Her liver transplant in 2000 returned her to her Christian origins in a new and surprising way. She formally was introduced to Mary Magdalene two years later on a pilgrimage to France. This profound meeting inspired Sara to give three years to painting and learning about this misunderstood woman.She resonated with Magdalene's own rebirth and teaching after the death of Jesus. She was inspired by this woman's spiritual comprehension of Christ's teachings and became aware of how Magdalene carries the central message and experience of the heart, love and compassion found missing today in many interpretations of Christianity. As a real woman, not a goddess, Magdalene became Sara's sacred image of the feminine for her own healing after her transplant.
                            </p>

                            <p>
                            The eighteen paintings and legendary narratives of Magdalene's life have been shown and well received in Los Angeles at the Agape International Spiritual Center, at the Cedar Centre Art Gallery in Lancaster and in Palo Alto at the Institute for Transpersonal Psychology. Sara is currently working on a book, “Awakening to the Light of Mary Magdalene” where she will tell her own personal healing story and weave it into the beautiful narratives and paintings of Magdalene. Her hope is that her story will inspire many others in the healing of their lives and how the divine feminine is available for healing whatever the pain or sorrow may be.
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
