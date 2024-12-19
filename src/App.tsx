import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import 'bootstrap/scss/bootstrap.scss';
import './scss/root.scss';
import { FidgetSpinner } from 'react-loader-spinner';
const TopBar = React.lazy(() => import('./components/topbar.tsx'));
const Footer = React.lazy(() => import('./components/footer.tsx'));
const Home = React.lazy(() => import('./pages/home.tsx'));
const Projects = React.lazy(() => import('./pages/projects.tsx'));

function App() {
  const { ref: homeRef, inView: isHomeVisible } = useInView({ threshold: 0.1 });
  const { ref: projectsRef, inView: isProjectsVisible } = useInView({ threshold: 0.1 });

  return (
    <Router>
      <div className="nav-container sticky-top">
        <TopBar />
      </div>

      <div className="app-container">
        <><div ref={homeRef} id="home-section" className={`section ${isHomeVisible ? 'visible' : ''}`}>
            <Suspense fallback={<FidgetSpinner />}>
              <Home />
            </Suspense>
          </div><div ref={projectsRef} id="projects-section" className={`section ${isProjectsVisible ? 'visible' : ''}`}>
              <Suspense fallback={<FidgetSpinner />}>
                <Projects />
              </Suspense>
            </div></>
      </div>
      <Footer />
    </Router>
  );
}

export default App;






