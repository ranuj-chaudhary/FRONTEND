import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './About';
import Contact from './Contact';
import Layout from '../layout/Layout';
import Home from './Home';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
