import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/scss/bootstrap.scss';
import './scss/root.scss';
import { FidgetSpinner } from 'react-loader-spinner';
//import TopBar from './components/topbar.tsx';
import Footer from './components/footer.tsx';
import TopBar from './components/topbar.tsx';
const Home = React.lazy(() => import('./pages/home.tsx'));

function App() {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <Router>
      <div className="app-container">
      <div className="nav-container">
            <TopBar/>
      </div>
      { loading ? 
      <div className="loader-container">
        <FidgetSpinner />
      </div> :
        <>
        <div className="main-content">
            <React.Suspense fallback=
              {
                <div className="loader-container">
                  <FidgetSpinner />
                </div> 
              }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
            </Routes>
            </React.Suspense>
              <Footer />
            </div></>
       }
      </div>
    </Router>
  );
}

export default App;

