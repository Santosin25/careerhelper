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
                Welcome To Careerhelper.crypto
              </h1>
              <p className="md:text-center">
                Here at careerhelper we focus on showing you how you can find a
                career that meet your need and educate you on how to improve
                your career skills.
              </p>
              {/* Have a imge or svg that has a tree and it's water by www or web */}
              <div className="flex flex-col gap-5 lg:space-x-7 xl:space-x-10 md:space-x-5 md:flex-row">
                <div className="flex flex-col space-y-3 md:base-1/2">
                  <p>
                    In case you have been curious on how your domain end at
                    .crypto instead of the tradition .com, where the curiosity
                    to your answer is that, we are using web3 domain, which cou
                    can also get yours from unstopable domain.
                  </p>
                  <button className="p-2 rounded-lg w-fit">Get Yours</button>
                </div>
                <a href="https://unstoppabledomains.com/?ref=7825e32106b4425">
                  {" "}
                  <img
                    src={unstopable}
                    alt="Unstopable"
                    className="md:base-1/2"
                  />
                </a>
              </div>
            </article>
            <BlogTopic />
          </section>
        </main>
      </main>
    </div>
  );
}

export default Home;
