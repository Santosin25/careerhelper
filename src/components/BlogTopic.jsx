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

export const BlogArticle = () => {
  return (
    <div className="pb-8">
      <h3 className="pb-2 text-xl font-bold text-center text-indigo-900 pt-14 sm:text-2xl">
        Blog Article
      </h3>
      <p>
        <p>
          Explore your website to learn more about our services and how we can
          help you take your career and financial future to the next level.
          Thank you for choosing Career Helper!
        </p>
      </p>
    </div>
  );
};

export const ProfessionalCryptoTrader = () => {
  return (
    <div className="flex md:h-28 items-stretch justify-center flex-col">
      <NavLink
        className="blogNavLink"
        to="blogs/professionalCryptoTrader"
        target="_parent"
        rel="noopener noreferrer"
      >
        The Ultimate Guide to Becoming a Professional Crypto Trader
        <NavLinkSpan />
      </NavLink>
    </div>
  );
};

export const EdtechPassiveIncome = () => {
  return (
    <div className="flex md:h-28 items-stretch justify-center flex-col  ">
      <NavLink
        className="blogNavLink"
        to="blogs/edutechPassiveIncome"
        target="_parent"
        rel="noopener noreferrer"
      >
        Unlock the Potential of Educational Technology to Generate Passive
        Income!
        <NavLinkSpan />
      </NavLink>
    </div>
  );
};

export const WaysToMakeMoneyWebDeveloper = () => {
  return (
    <div className="flex md:h-28 items-stretch justify-center flex-col  ">
      <NavLink
        className="blogNavLink"
        to="blogs/waysToMakeMoneyWebDeveloper"
        target="_parent"
        rel="noopener noreferrer"
      >
        30 Creative Ways to Make Money from Home as a Web Developer
        <NavLinkSpan />
      </NavLink>
    </div>
  );
};

export const CareerEdutech = () => {
  return (
    <div className="flex md:h-28 items-stretch justify-center flex-col  ">
      <NavLink
        className="blogNavLink"
        to="blogs/careerEdutech"
        target="_parent"
        rel="noopener noreferrer"
      >
        Unlock Your Potential: Exploring the Exciting World of a Career in
        Educational Technology
        <NavLinkSpan />
      </NavLink>
    </div>
  );
};

export const CareerWebDeveloper = () => {
  return (
    <div className="flex justify-center flex-col md:h-28 items-stretch max-h-72 max-w-full">
      <NavLink
        className="blogNavLink"
        to="blogs/careerWebDeveloper"
        target="_parent"
        rel="noopener noreferrer"
      >
        How to Launch Your Career as a Web Developer
        <NavLinkSpan />
      </NavLink>
    </div>
  );
};

export const SustainableIncome = () => {
  return (
    <div className="flex md:h-28 items-stretch justify-center flex-col  ">
      <NavLink
        className="blogNavLink"
        to="blogs/sustainableIncome"
        target="_parent"
        rel="noopener noreferrer"
      >
        How to Create a Sustainable Source of Income with Crypto Trading
        <NavLinkSpan />
      </NavLink>
    </div>
  );
};

export const ChoosingBroker = () => {
  return (
    <div className="flex md:h-28 items-stretch  justify-center flex-col w-full">
      <NavLink
        className="blogNavLink"
        to="blogs/choosingBroker"
        target="_parent"
        rel="noopener noreferrer"
      >
        How To Choose a Broker
        <NavLinkSpan />
      </NavLink>
    </div>
  );
};

export const Forex = () => {
  return (
    <div className="flex md:h-28 items-stretch justify-center flex-col  ">
      <NavLink
        className="blogNavLink"
        to="blogs/Forex"
        target="_parent"
        rel="noopener noreferrer"
      >
        What Is Forex - A Beginner Guild To FX
        <NavLinkSpan />
      </NavLink>
    </div>
  );
};

export const HowToTradeForex = () => {
  return (
    <div className="flex md:h-28 items-stretch justify-center flex-col  ">
      <NavLink
        className="blogNavLink"
        to="blogs/HowToTradeForex"
        target="_parent"
        rel="noopener noreferrer"
      >
        How To Actually Trade Forex
        <NavLinkSpan />
      </NavLink>
    </div>
  );
};

export const ForexTradingStatagies = () => {
  return (
    <div className="flex md:h-28 items-stretch justify-center flex-col  ">
      <NavLink
        className="blogNavLink"
        to="blogs/TradingStatagies"
        target="_parent"
        rel="noopener noreferrer"
      >
        A Beginner's Guide to Forex Trading Strategies
        <NavLinkSpan />
      </NavLink>
    </div>
  );
};
// ====================================================================

function BlogTopic() {
  return (
    <div>
      <BlogArticle />
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-5 lg:gap-7 xl:gap-5 xl:grid-cols-2">
        <CareerEdutech />
        <CareerWebDeveloper />
        <ProfessionalCryptoTrader />
        <SustainableIncome />
        <EdtechPassiveIncome />
        <WaysToMakeMoneyWebDeveloper />
        <ChoosingBroker />
        <Forex />
        <HowToTradeForex />
        <ForexTradingStatagies />
      </div>
    </div>
  );
}

export const BlogTopicCareerEdutech = () => {
  return (
    <div>
      <BlogArticle />
      <div className="flex lg:mx-auto pb-10 flex-col md:grid md:grid-cols-2 md:gap-5 lg:gap-7 xl:gap-5 xl:grid-cols-3">
        <ProfessionalCryptoTrader />
        <EdtechPassiveIncome />
        <WaysToMakeMoneyWebDeveloper />
      </div>
    </div>
  );
};

export const BlogTopicCareerWeb = () => {
  return (
    <div className="lg:px-10 xl:px-14">
      <BlogArticle />
      <div className="flex lg:mx-auto flex-col pb-10 md:grid md:grid-cols-2 md:gap-5 lg:gap-7 xl:gap-5 xl:grid-cols-2">
        <CareerEdutech />
        <ProfessionalCryptoTrader />
        <EdtechPassiveIncome />
        <WaysToMakeMoneyWebDeveloper />
        <CareerWebDeveloper />
      </div>
    </div>
  );
};

export const BlogTopicForex = () => {
  return (
    <div>
      <BlogArticle />
      <div className="flex lg:mx-auto flex-col pb-10 md:grid md:grid-cols-2 md:gap-5 lg:gap-7 xl:gap-5 xl:grid-cols-3">
        <NavLink
          className="blogNavLink"
          to="../../blogs/ChoosingBroker"
          target="_parent"
          rel="noopener noreferrer"
        >
          How To Choose a Broker
          <NavLinkSpan />
        </NavLink>
        <NavLink
          className="blogNavLink"
          to="../../blogs/HowToTradeForex"
          target="_parent"
          rel="noopener noreferrer"
        >
          How To Actually Trade Forex
          <NavLinkSpan />
        </NavLink>
        <NavLink
          className="blogNavLink"
          to="../../blogs/TradingStatagies"
          target="_parent"
          rel="noopener noreferrer"
        >
          A Beginner's Guide to Forex Trading Strategies
          <NavLinkSpan />
        </NavLink>
      </div>
    </div>
  );
};

export const BlogTopicHowfx = () => {
  return (
    <div>
      <BlogArticle />
      <div className="flex lg:mx-auto pb-10 flex-col md:grid md:grid-cols-2 md:gap-5 lg:gap-7 xl:gap-5 xl:grid-cols-3">
        <NavLink
          className="blogNavLink"
          to="../../blogs/ChoosingBroker"
          target="_parent"
          rel="noopener noreferrer"
        >
          How To Choose a Broker
          <NavLinkSpan />
        </NavLink>
        <NavLink
          className="blogNavLink"
          to="../../blogs/Forex"
          target="_parent"
          rel="noopener noreferrer"
        >
          What Is Forex - A Beginner Guild To FX
          <NavLinkSpan />
        </NavLink>

        <NavLink
          className="blogNavLink"
          to="../../blogs/TradingStatagies"
          target="_parent"
          rel="noopener noreferrer"
        >
          A Beginner's Guide to Forex Trading Strategies
          <NavLinkSpan />
        </NavLink>
      </div>
    </div>
  );
};

export const BlogTopicStatagies = () => {
  return (
    <div>
      <BlogArticle />
      <div className="flex flex-col md:grid pb-10 md:grid-cols-2 md:gap-5 lg:gap-7 xl:gap-5 xl:grid-cols-3">
        <NavLink
          className="blogNavLink"
          to="../../blogs/ChoosingBroker"
          target="_parent"
          rel="noopener noreferrer"
        >
          How To Choose a Broker
          <NavLinkSpan />
        </NavLink>
        <NavLink
          className="blogNavLink"
          to="../../blogs/Forex"
          target="_parent"
          rel="noopener noreferrer"
        >
          What Is Forex - A Beginner Guild To FX
          <NavLinkSpan />
        </NavLink>
        <NavLink
          className="blogNavLink"
          to="../../blogs/HowToTradeForex"
          target="_parent"
          rel="noopener noreferrer"
        >
          How To Actually Trade Forex
          <NavLinkSpan />
        </NavLink>
      </div>
    </div>
  );
};

export const BlogTopicTwo = () => {
  return (
    <div>
      <BlogArticle />
      <div className="flex lg:mx-auto pb-10 flex-col md:grid md:grid-cols-2 md:gap-5 lg:gap-7 xl:gap-5 xl:grid-cols-3">
        <NavLink
          className="blogNavLink"
          to="../../blogs/Forex"
          target="_parent"
          rel="noopener noreferrer"
        >
          What Is Forex - A Beginner Guild To FX
          <NavLinkSpan />
        </NavLink>
        <NavLink
          className="blogNavLink"
          to="../../blogs/HowToTradeForex"
          target="_parent"
          rel="noopener noreferrer"
        >
          How To Actually Trade Forex
          <NavLinkSpan />
        </NavLink>
        <NavLink
          className="blogNavLink"
          to="../../blogs/TradingStatagies"
          target="_parent"
          rel="noopener noreferrer"
        >
          A Beginner's Guide to Forex Trading Strategies
          <NavLinkSpan />
        </NavLink>
      </div>
    </div>
  );
};

export default BlogTopic;
