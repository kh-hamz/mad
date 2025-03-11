import "./App.css";
import { useAuth } from "./context/AuthContext";
import AuthNavbar from "./components/Navbar/AuthNavbar";
import GuestNavbar from "./components/Navbar/GuestNavbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import CaseSubmission from "./pages/CaseSubmission";

function App() {
  const { isAuthenticated } = useAuth(); 
  return (
    <Router>
      {isAuthenticated ?<GuestNavbar /> : <AuthNavbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/case-submission" element={<CaseSubmission />} />  */}
      </Routes>
    </Router>
  );
}

export default App;
