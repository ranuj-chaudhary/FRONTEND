import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NoPage, Home, Aboutus, ContactUs } from "./pages";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { useTheme } from "./context/useTheme";
function App() {
  const { theme } = useTheme();
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
