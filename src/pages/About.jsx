import React from "react";
import { Helmet } from "react-helmet";

function About() {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content=" Welcome to CareerHelper.Crypto! We are a platform dedicated to helping
          people achieve their career goals and create passive income streams."
        />
        <meta name="keywords" content="Forex, Broker," />
        <title>About page | careerhelper.crypto</title>
      </Helmet>
      <main className="mainElement">
        <section className="sectionElement">
          <article className="articleElement">
            <div className="oneDivPage">
              <h1 className="firstBlueHeading1">About page</h1>
              <p>
                Welcome to CareerHelper.Crypto! We are a platform dedicated to
                helping people achieve their career goals and create passive
                income streams.
              </p>
              <p>
                At CareerHelper.Crypto, we believe that everyone should have the
                opportunity to pursue their dreams and create a life of
                financial freedom. We provide resources and guidance to help you
                find the right career path, develop your skills, and create
                passive income streams that will help you reach your goals.
              </p>
              <p>
                Our team of experienced professionals is here to provide you
                with the tools and support you need to succeed. We offer a
                variety of services, including career coaching, resume writing,
                job search assistance, and more. We also provide resources on
                how to invest in cryptocurrency and other digital assets for
                passive income opportunities.
              </p>
              <p>
                We understand that everyone’s journey is unique, so we strive to
                provide personalized advice tailored to your individual needs.
                Our goal is to empower you with the knowledge and confidence
                needed to take control of your future and achieve success in
                your career and financial life.
              </p>
              <p className="pb-9">
                Thank you for visiting CareerHelper.Crypto! We look forward to
                helping you reach your goals!
              </p>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default About;
