import React, { useEffect } from "react";
import { NavLink as Link } from "react-router-dom";
import {
  Container,
  Button,
  Row,
  Col,
  Card
} from "react-bootstrap";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import "./landingPage.css";
import { Newspaper } from "@mui/icons-material";
import {
  Collapse,
  Ripple,
  Input,
  initTE,
} from "tw-elements";


export default function LandingPage() {
  useEffect(() => {
    initTE({ Collapse, Input, Ripple });
    }, []);
  return (
    <>
      <header>
       <nav
          className="relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4"
          data-te-navbar-ref
        >
          <div className="flex w-full flex-wrap items-center justify-between px-3">
            <div>
              <a
                className="lpNavLogo someClass1 mx-2 my-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
                href="/#"
              >
                CHATTER
              </a>
            </div>

            <button
              className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
              type="button"
              data-te-collapse-init
              data-te-target="#navbarSupportedContent4"
              aria-controls="navbarSupportedContent4"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              
              <span className="[&>svg]:w-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-7 w-7"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>

           
            <div
              className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
              id="navbarSupportedContent4"
              data-te-collapse-item
            >
             
              
              <ul
                className="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"
                data-te-navbar-nav-ref
              >
               <li
          className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1"
          data-te-nav-item-ref>
                 
                <Link to="/login"
                className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                aria-current="page"
                data-te-nav-link-ref>
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="mr-3 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none"
                >
                  Login
                </button></Link>
                </li>
                <li
          className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1"
          data-te-nav-item-ref>
                <Link to="/register" className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
            aria-current="page"
            data-te-nav-link-ref>
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="mr-3 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Sign up for free
                </button></Link>
               </li>
              
              </ul>
            </div>
          </div>
        </nav>

        {/* Hero section with background image, heading, subheading and button */}
        <div className="lpHeroSection relative overflow-hidden bg-cover bg-no-repeat">
          <div className="lpHeroSectionWrapper absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
            <div className="flex h-full items-center justify-center">
              <div className="lpHeroSectionDesc px-6 text-left text-white md:px-12">
                <h2 className="lpHeroSectionTitle mb-6 text-5xl sm:text-sm md:text-base font-bold">
                  Welcome to Chatter: A Haven for Text-Based Content
                </h2>
                {/* <h3 className=" mb-8 text-3xl sm:text-sm font-bold">
                  Unleash the Power of Words, Connect with Like-minded Readers
                  and Writers
                </h3> */}
<Link to="/register">
                <button
                  type="button"
                  className="lpHeroSectionButton inline-block rounded border-2 border-neutral-50 px-6  text-xs leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Get started
                </button></Link>
              </div>
            </div>
          </div>
        </div>
      </header>



      {/* About Section */}
<div className="container my-24 mx-auto md:px-6">
  
  <section className="mb-32">
    <h1 className="mb-4 text-3xl font-bold">
    About Chatter
    </h1>

    <p className="mb-6 flex items-center font-bold uppercase text-danger dark:text-danger-500">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
        className="mr-2 h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
        </svg>Hot new app
    </p>

    <p className="mb-6">
    Chatter is a multi-functional platform where authors and readers
    can have access to their own content. It aims to be a
    traditional bookworms heaven and a blog to get access to more
    text based content. Our vision is to foster an inclusive and
    vibrant community where diversity is celebrated. We encourage
    open-mindedness and respect for all individuals, regardless of
    their backgrounds or beliefs. By promoting dialogue and
    understanding, we strive
    </p>

    <img src="https://mdbcdn.b-cdn.net/img/new/slides/194.jpg"
      className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" />

    
  </section>
</div>





      <Container className="lpWhySection">
        <div className="lpWhySectionDescription">
        <h1 className="mb-4 text-3xl font-bold">
        Why you should join chatter
    </h1>
          <p className="lpWhySectionPara">
            Our goal is to make writers and readers see our platform as their
            next heaven for blogging, ensuring ease in interactions, connecting
            with like-minded peers, have access to favorite content based on
            interests and able to communicate your great ideas with people
          </p>
        </div>
        <Row className="lpWhySectionGridContainer">
          <Col>
            <Card className="lpWhySectionGrid">
              <div className="lpWhySectionAnalyticsImgDiv">
                <img src="images/carbon_analytics.svg" alt="" />
              </div>
              <Card.Body>
                <Card.Title>Analytics</Card.Title>
                <Card.Text className="lpAnalyticsText">
                  Analytics to track the number of views, likes and comment and
                  also analyze the performance of your articles over a period of
                  time.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="lpWhySectionGrid">
              <div className="lpWhySectionAnalyticsImgDiv">
                <Diversity3Icon className="lpWhySectionAnalyticsImg" />
              </div>
              <Card.Body>
                <Card.Title>Social Interactions</Card.Title>
                <Card.Text className="lpAnalyticsText">
                  Social interactions Users on the platform can interact with
                  posts they like, comment and engage in discussions.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="lpWhySectionGrid">
              <div className="lpWhySectionAnalyticsImgDiv">
                <Newspaper className="lpWhySectionAnalyticsImg" />
              </div>
              <Card.Body>
                <Card.Title>Content Creation</Card.Title>
                <Card.Text className="lpAnalyticsText">
                  Content creation Write nice and appealing with our in-built
                  markdown, a rich text editor.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>


  
      {/* Get Started Section */}
      <div className="container my-24 mx-auto md:px-6">
  
  <section className="mb-32">
    <h1 className="mb-4 text-3xl font-bold">
    Write, read and connect with great minds on chatter
    </h1>


    <p className="mb-6">
    Share people your great ideas, and also read write-ups based on your
            interests. connect with people of same interests and goals.
    </p>
    <Link to="/register">
<Button
            variant="primary"
            className="lpFirstSectionButton"
            style={{ backgroundColor: "#543ee0" }}
          >
            Get Started
          </Button></Link>
    
  </section>
</div>
     

      {/* Footer container  */}
      <footer className="lpFooter text-center text-neutral-600 dark:text-neutral-200 lg:text-left">
        {/* Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins.  */}
        <div className="lpFooterDiv mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/*  Tailwind Elements section  */}
            <div className="">
              <h4 className="lpFooterTitle mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                CHATTER
              </h4>
            </div>
            {/*  Products section  */}
            <div>
              <h6 className="lpFooterSubTitles mb-4 flex justify-center md:justify-start">
                Explore
              </h6>
              <p className="lpFooterSubTitlesContent mb-4 flex items-center justify-center md:justify-start">
                Community
              </p>
              <p className="lpFooterSubTitlesContent mb-4 flex items-center justify-center md:justify-start">
                Trending blogs
              </p>
              <p className="lpFooterSubTitlesContent mb-4 flex items-center justify-center md:justify-start">
                Chatter for teams
              </p>
            </div>
            {/* Useful links section  */}
            <div>
              <h6 className="mb-4 flex justify-center lpFooterSubTitles md:justify-start">
                Support
              </h6>
              <p className="lpFooterSubTitlesContent mb-4 flex items-center justify-center md:justify-start">
                Support docs
              </p>
              <p className="lpFooterSubTitlesContent mb-4 flex items-center justify-center md:justify-start">
                Join Slack
              </p>
              <p className="lpFooterSubTitlesContent mb-4 flex items-center justify-center md:justify-start">
                Contacts
              </p>
            </div>
            {/* Contact section */}
            <div>
              <h6 className="mb-4 flex justify-center lpFooterSubTitles md:justify-start">
                Official blog
              </h6>
              <p className="lpFooterSubTitlesContent mb-4 flex items-center justify-center md:justify-start">
                Official blog
              </p>
              <p className="lpFooterSubTitlesContent mb-4 flex items-center justify-center md:justify-start">
                Engineering blog
              </p>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="lpFooterCopyright  p-6 text-center">
          <span>© 2023 Copyright:</span>
          <a
            className="font-semibold text-neutral-600 dark:text-neutral-400"
            href="/#"
          >
            Ethel Tech
          </a>
        </div>
      </footer>
      {/* <Link to="/feedpage">Feed Page</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/create-post">Post</Link> */}
    </>
  );
}
