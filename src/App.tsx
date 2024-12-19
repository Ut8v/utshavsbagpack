import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import 'bootstrap/scss/bootstrap.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './scss/root.scss';
import { FidgetSpinner } from 'react-loader-spinner';
const TopBar = React.lazy(() => import('./components/topbar.tsx'));
const Footer = React.lazy(() => import('./components/footer.tsx'));
const Home = React.lazy(() => import('./pages/home.tsx'));
const Projects = React.lazy(() => import('./pages/projects.tsx'));
const Contact = React.lazy(() => import('./pages/contact.tsx'));
const ChatBlog= React.lazy(() => import('./components/chat-blog.tsx'));

function App() {
  const { ref: homeRef, inView: isHomeVisible } = useInView({ threshold: 0.1 });
  const { ref: projectsRef, inView: isProjectsVisible } = useInView({ threshold: 0.1 });
  const { ref: contactRef, inView: isContactVisible } = useInView({ threshold: 0.1 });

  return (
<Router>
  <div className="nav-container sticky-top">
    <TopBar />
  </div>

  <div className="app-container">
    <Routes>
      <Route path="/chat-blog" element={<ChatBlog />} />
      <Route
        path="/"
        element={
          <>
            <div ref={homeRef} id="home-section" className={`section ${isHomeVisible ? 'visible' : ''}`}>
              <Suspense fallback={<FidgetSpinner />}>
                <Home />
              </Suspense>
            </div>
            <div ref={projectsRef} id="projects-section" className={`section ${isProjectsVisible ? 'visible' : ''}`}>
              <Suspense fallback={<FidgetSpinner />}>
                <Projects />
              </Suspense>
            </div>
            <div ref={contactRef} id="contact-section" className={`section ${isContactVisible ? 'visible' : ''}`}>
              <Suspense fallback={<FidgetSpinner />}>
                <Contact />
              </Suspense>
            </div>
            <Footer />
          </>
        }
      />
    </Routes>
  </div>
</Router>
  );
}

export default App;






