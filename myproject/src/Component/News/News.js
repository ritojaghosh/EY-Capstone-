import React from 'react'
import './News.css'

const News = () => {
  return (
    <div>
      <h1 className="category-text mt-44 mb-16">News and Promotion</h1>
        <div className="news">
            <div className="news-blogs">
                <div className="blog1">
                    <div className="blog-content m-4">
                        <h1 className="font-bold text-xl mb-4">Need a healthy snack for your cat?</h1>
                        <p className="mb-2 text-sm ">Moderation is key, experts tell WebMD. </p>

                        <p className="mb-4 text-sm"> It's fine to feed your cat treats, but they “should be a very small
                            part of the diet,"
                            says
                            Marla J. McGeorge, DVM, an Oregon vet who treats felines only. </p>

                        <p className="text-sm lg:hidden"> How small? Many experts recommend cat treats make up no more than
                            10% of the
                            total
                            calories
                            a cat eats.
                        </p>
                        <p className="font-bold mt-4">10 Aug 2022</p>
                    </div>
                </div>
                <div className="blog2">
                    <div className="blog-content m-4">
                        <h1 className="font-bold text-xl mb-4">Need a healthy snack for your cat?</h1>
                        <p className="mb-2 text-sm">Moderation is key, experts tell WebMD. </p>

                        <p className="mb-4 text-sm"> It's fine to feed your cat treats, but they “should be a very small
                            part of the diet,"
                            says
                            Marla J. McGeorge, DVM, an Oregon vet who treats felines only. </p>

                        <p className="text-sm lg:hidden"> How small? Many experts recommend cat treats make up no more than
                            10% of the
                            total
                            calories
                            a cat eats.
                        </p>
                        <p className="font-bold mt-4">10 Aug 2022</p>
                    </div>
                </div>
                <div className="blog3">
                    <div className="blog-content m-4">
                        <h1 className="font-bold text-xl mb-4">Need a healthy snack for your cat?</h1>
                        <p className="mb-2 text-sm">Moderation is key, experts tell WebMD. </p>

                        <p className="mb-4 text-sm"> It's fine to feed your cat treats, but they “should be a very small
                            part of the diet,"
                            says
                            Marla J. McGeorge, DVM, an Oregon vet who treats felines only. </p>

                        <p className="text-sm lg:hidden"> How small? Many experts recommend cat treats make up no more than
                            10% of the
                            total
                            calories
                            a cat eats.
                        </p>
                        <p className="font-bold mt-4">10 Aug 2022</p>
                    </div>
                </div>
                <div className="blog4">
                    <div className="blog-content m-4">
                        <h1 className="font-bold text-xl mb-4">Need a healthy snack for your cat?</h1>
                        <p className="mb-2 text-sm">Moderation is key, experts tell WebMD. </p>

                        <p className="mb-4 text-sm"> It's fine to feed your cat treats, but they “should be a very small
                            part of the diet,"
                            says
                            Marla J. McGeorge, DVM, an Oregon vet who treats felines only. </p>

                        <p className="text-sm lg:hidden"> How small? Many experts recommend cat treats make up no more than
                            10% of the
                            total
                            calories
                            a cat eats.
                        </p>
                        <p className="font-bold mt-4">10 Aug 2022</p>
                    </div>
                </div>
            </div>
            <div className="contact-form">
                <h1 className="font-semibold text-lg">If you have any questions, feel free to contact us!</h1>
                <form className="mt-4">
                    <label>
                        <input id="fname" type="text" placeholder="Your Name"/>
                        <span>Your Name</span>
                    </label>
                    <label>
                        <input type="email" placeholder="Email"/>
                        <span>Email</span>
                    </label>
                    <label>
                        <input id="fname" type="text" placeholder="Your Phone"/>
                        <span>Your Phone</span>
                    </label>
                    <label>
                        <input id="fname" type="text" placeholder="Your Message" class="h-72"/>
                        <span>Your Message</span>
                    </label>

                    <input type="submit" value="Send"/>
                </form>
            </div>
        </div>

    </div>

    // </div>
  )
}

export default News;