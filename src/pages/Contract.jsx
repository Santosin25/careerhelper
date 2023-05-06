import React from "react";
import { Helmet } from "react-helmet";
import { Contact } from "../components"

function Contract() {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="We are here to help you with any questions or concerns you may
              have about our services. Please fill out the form below and we
              will get back to you as soon as possible."
        />
        <meta name="keywords" content="Forex, Broker," />
        <title>Contract Page | careerhelper.crypto</title>
      </Helmet>
      <main className="mainElement bg-gray-900 text-gray-50">
        <section className="sectionElement">
          <article className="articleElement">
            <div className="allDivElement">
              <h1 className="font-extrabold text-center py-10 pb-3 xl:text-4xl text-3xl text-gray-100">Contract Page</h1>
              <h6 className="text-center">Welcome to the CareerHelper.Crypto Contact Page!</h6>
              <p className="text-center max-w-lg mx-auto">
                We are here to help you with any questions or concerns you may
                have about our services. Please fill out the form below and we
                will get back to you as soon as possible.
              </p>
            </div>
<div>
<Contact />
</div>
            
            <p className="pb-10">
              Thank you for contacting us! We look forward to hearing from you.
            </p>
          </article>
        </section>
      </main>
    </div>
  );
}

export default Contract;
