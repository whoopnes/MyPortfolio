import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import LandingPage from "./components/landing-page";
import Registration from "./components/register";
import Navbar from "./components/navbar";
import Footer from "./components/footer"; 
import TwibbonPage from './components/TwibbonPage'; 
import IgPostPage from './components/IgPostPage';  
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-[72px]">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/register"
            element={
              <>
                <Registration />
                <Footer />
              </>
            }
          />
          <Route path="/twibbon" element={<TwibbonPage />} /> 
          <Route path="/ig-post" element={<IgPostPage />} />
          <Route path="/guidebook" element={<LandingPage />} />
          <Route path="/contact" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
