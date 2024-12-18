import React from "react";
import '../scss/home.scss';
const Info = React.lazy(() => import('../components/info'));
const Skill = React.lazy(() => import('../components/skills'));

const Home: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 mt-5">
          <Info />
        </div>
        <div className="col-md-4">
          <Skill />
        </div>
      </div>
    </div>
  );
};

export default Home;