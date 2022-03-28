import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/books/JamesWBosleybook.png'
import { Helmet } from "react-helmet"


const ATB = (props) => {

    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'sara-taft',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
                <Helmet title="About the Book | Sara Taft" />
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" >

                        <BookInfo
                            data={{
                                title: `Calarel`,
                                spanFirst: `The Beginning Journey`,
                                imgSrc: Book1,
                                id: 'sailor-sermon',
                                content:
                                    `
                                    <p>
                                    A Good Book for Our Current Times.

                                    After emerging out of the pandemic and experiencing the number of deaths, disappointments and grief, the book "Mary Magdalene, Shaman" contains a healing and hopeful message for anyone going through a challenging time, after 2020. It is a story of faith, passion and transformation.
                                    
                                    At 62, Sara was faced with having to have a liver transplant if she wanted to live. Not knowing if she would get one because they were scarce, her intense prayer work with her community of women, and a twelve hour ritualistic shamanic healing in the Arizona desert facilitated a miraculous gift of a new liver and a successful transplant.
                                    
                                    Today at age 86, she has lived long enough to welcome seven grandchildren and three great grandchildren. Her prayers were answered
                                    </p>
                                    `,
                                ebooks: {
                                    // stratton: 'https://www.stratton-press.com/books/heroes-and-villains-california-dreaming-book-i/',
                                    barnes: 'https://www.barnesandnoble.com/w/mary-magdalene-shaman-sara-taft/1118198329?ean=9781452587165',
                                    amazon: 'https://www.amazon.com/Mary-Magdalene-Shaman-Awakening-Indigenous-ebook/dp/B09P1XZC7D/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1640874531&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Mary-Magdalene-Shaman-Awakening-Indigenous/dp/1648956521/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1640874531&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/mary-magdalene-shaman-sara-taft/1118198329?ean=9781648956522',
                                    booksamillion: 'https://www.booksamillion.com/p/Mary-Magdalene-Shaman/Sara-Taft/9781648956522?id=8158356429268',
                                }
                            }}
                        />

                        <div className="commentSection">
                            <div id="disqus_thread">
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                        </div>
                    </div>
                </main>


            </Layout>
        </>
    )
}


export default ATB;