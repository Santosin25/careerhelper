import React from "react";
import Helmet from "react-helmet";
import { BlogTopic } from "./../components";
import unstopable from "./../images/unstopable.png";

function Home() {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Forex Market or FX is the process of exchanging one currency into
            another for commercial purpose. It's also the market for exchanging
            global currency. For example 1 Dollar to a Naira."
        />
        <meta name="keywords" content="careerhelper.crypto, Forex, Trading," />
        <title>Home | Careerhelper.crypto</title>
      </Helmet>
      <main>
        <section className="bg-blue-900 bg-center bg-no-repeat bg-cover select-none h-fit bg-forex-hero mix-blend-darken">
          <div className="flex flex-col items-center justify-center h-64 text-xl font-bold text-center text-gray-100 gap-y-5 lg:h-72">
            <h1 className="text-3xl text-center w-80 md:w-[360px] xl:text-4xl lg:w-[450px] xl:w-[550px] font-bold text-blue-100">
              Careerhelper.crypto
            </h1>
          </div>
        </section>
        {/*  Content Section */}
        <main className="px-10 py-10 leading-relaxed tracking-tight text-gray-900 bg-gray-50">
          <section className="firstSection">
            <article className="space-y-10">
              <h1 className="-mb-4 text-xl font-bold text-center text-green-900 md:pt-16 sm:text-2xl">
                Welcome To Career Helper
              </h1>
              <p className="md:text-center">
                We are dedicated to helping you build a successful career while
                also exploring opportunities for passive income. Our goal is to
                provide you with tools, resoures, and support you need to thrive
                in both aspect of your life.
              </p>
              <p>
                Whether you are just starting out in your career or looking to
                make a chnage, we offer guidance on everything from resume
                writing and job search strategies to networking and professional
                development.
              </p>
              <p>
                In addition, we understand the importance of deversifying your
                income streams and and creating passive income. we can help you
                explore various option such as investing, online business and
                rental properties.
              </p>
              <p>
                Our team of experts are passionate about helping you achieve
                your gaol and reach your full potential. We believe that with
                the right mindset and strategies, anyone can success in their
                career and create a sustainable passive income stream.
              </p>

              {/* Have a imge or svg that has a tree and it's water by www or web */}
              <div className="bg-gray-900 text-white px-3 py-6">
                <div>
                  <h1 className="font-bold text-2xl text-center pb-2 uppercase">
                    Unstopable domain
                  </h1>
                </div>
                <div className="flex flex-col gap-5 lg:space-x-7 lg:basis-2/5 xl:space-x-10 md:space-x-5 md:flex-row">
                  <div className="flex flex-col space-y-3 md:basis-1/2">
                    <p>
                      Unstopable domain is revolutionizing the way we use yhe
                      internet, with their new .crypto, .nft, .blockchain
                      domain, you can now own your online identity and take
                      control of your digital assets.
                    </p>
                    <button className="p-2 rounded-lg w-fit">
                      <a href="https://unstoppabledomains.com/?ref=7825e32106b4425">
                        Get Yours
                      </a>
                    </button>
                  </div>
                  <div className="md:basis-1/2 sm:ml-28 md:ml-0 left-0 lg:basis-3/5 w-full">
                    <a href="https://unstoppabledomains.com/?ref=7825e32106b4425">
                      <img
                        src={unstopable}
                        alt="Unstopable"
                        className="block"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <BlogTopic />
              </div>
            </article>
          </section>
        </main>
      </main>
    </div>
  );
}

export default Home;
