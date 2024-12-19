import React from "react";
import '../scss/home.scss';
import { Helmet } from "react-helmet-async";
const Info = React.lazy(() => import('../components/info'));
const Skill = React.lazy(() => import('../components/skills'));

const Home: React.FC = () => {
  return (
    <><Helmet>
      <title>UtshavsBagpack</title>
      <meta name="description" content="Learn more about Utshav Khatiwada, a Software Developer student at University of Cincinnati. Connect via LinkedIn." />
      <meta name="keywords" content="Utshav Khatiwada, Full-Stack development, software developer, information technology, univeristy of cincinnati " />
      <link rel="canonical" href="https://utshavsbagpack.me" />

      <meta property="og:title" content="portfolio" />
      <meta property="og:description" content="Learn more about Utshav Khatiwada, a Software Developer student at University of Cincinnati. Connect via LinkedIn." />
      <meta property="og:url" content="https://utshavsbagpack.me" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Utshav's Bagpack" />

      <meta name="author" content="Utshav Khatiwada" />
      <meta name="robots" content="index, follow" />
    </Helmet><div className="container mt-5">
        <div className="row">
          <div className="col-md-8 mt-5">
            <Info />
          </div>
          <div className="col-md-4">
            <Skill />
          </div>
          <hr />
        </div>
      </div></>
  );
};

export default Home;