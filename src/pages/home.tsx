import React from "react";
import '../scss/home.scss';
const Info = React.lazy(() => import('../components/info'));
const Skill = React.lazy(() => import('../components/skills'));

const Home: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 mt-5">
          <Info />
        </div>
        <div className="col-md-4">
          <Skill />
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Home;