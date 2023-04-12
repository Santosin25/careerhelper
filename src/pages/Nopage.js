import React from "react";
import { NavLink } from "react-router-dom"
import { Helmet } from "react-helmet";

function Nopage() {
  return (
    <div>
      <Helmet>
        <title>404 Page</title>
      </Helmet>
       <main className="content">
      <section
        className="mt-16 h-fit select-none bg-blue-900 bg-blog-hero bg-cover bg-center bg-no-repeat mix-blend-darken"
      >
        <div
          className="flex h-64 flex-col items-center justify-center gap-y-5 text-center text-xl font-bold text-gray-100 lg:h-72"
        >
          <h1
            className="text-3xl text-blue-100 xs:text-4xl sm:text-4xl md:text-6xl lg:text-7xl"
          >
            404 Page
          </h1>
          <NavLink
            to="/"
            className="font-bold text-blue-200 hover:border-b hover:border-blue-700 hover:text-blue-50"
            >Home</NavLink>
        </div>
      </section>
      {/*  Content Section */}
      <section
        className="flex-auto space-y-10 px-5 pb-10 sm:px-16 md:px-24 lg:px-48 xl:px-72"
      >
        <article className="h-screen">
          <h1 className="pt-20 text-xl font-bold capitalize text-red-600">
            404 page not found
          </h1>
        </article>
      </section>
    </main>
    </div>
  );
}

export default Nopage;
