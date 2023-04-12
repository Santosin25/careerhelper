import React from "react";
import { NavLink } from "react-router-dom";

export const NavLinkSpan = () => {
  return (
    <div>
      <span className="absolute bottom-0 w-1 h-4 rotate-45 border-r border-black hover:border-green-600 right-1"></span>
      <span className="absolute bottom-0 right-0 w-1 h-2 rotate-45 border-r border-black hover:border-green-600"></span>
    </div>
  );
};

function BlogTopic() {
  return (
    <div>
      <div>
        <h3 className="pb-8 text-xl font-medium text-center text-indigo-900 pt-14 sm:text-2xl">
          Blog Article
        </h3>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-5 lg:gap-7 xl:gap-5 xl:grid-cols-4">
        <NavLink
          className="blogNavLink"
          to="blogs/ChoosingBroker"
          target="_blank"
          rel="noopener noreferrer"
        >
          How To Choose a Broker
          <NavLinkSpan />
        </NavLink>
        <NavLink
          className="blogNavLink"
          to="blogs/Forex"
          target="_blank"
          rel="noopener noreferrer"
        >
          What Is Forex - A Beginner Guild To FX
          <NavLinkSpan />
        </NavLink>
        <NavLink
          className="blogNavLink"
          to="blogs/HowToTradeForex"
          target="_blank"
          rel="noopener noreferrer"
        >
          How To Actually Trade Forex
          <NavLinkSpan />
        </NavLink>
        <NavLink
          className="blogNavLink"
          to="blogs/TradingStatagies"
          target="_blank"
          rel="noopener noreferrer"
        >
          A Beginner's Guide to Forex Trading Strategies
          <NavLinkSpan />
        </NavLink>
      </div>
    </div>
  );
}

export default BlogTopic;
