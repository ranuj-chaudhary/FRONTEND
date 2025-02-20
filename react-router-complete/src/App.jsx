import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './component/About';
import Contact from './component/Contact';
import ContactInfo from './component/ContactInfo';
import Layout from './layout/Layout';
import Home from './component/Home';
import NotFound from './component/NotFound';
import DashBoard from './component/DashBoard';
import Form from './component/Form';
import Login from './component/Login';
import ProtectedRoute from './component/ProtectedRoute';
import { AuthContextProvider } from './context/AuthContext';
import Redirects from './MAIN_CONCEPTS/Redirects';

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />
          <Route path="/redirects" element={<Redirects />} />

          <Route path="contact" element={<Contact />}>
            <Route path="info/:data/:id" element={<ContactInfo />} />
          </Route>

          <Route path="*" element={<NotFound />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashBoard />
              </ProtectedRoute>
            }
          >
            <Route path="form" element={<Form />} />
          </Route>
        </Route>
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
