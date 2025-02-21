import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';

import Home from './component/Home';
import ProtectedRoute from './component/ProtectedRoute';
import Layout from './layout/Layout';

// import About from './component/About';
// import Contact from './component/Contact';
// import ContactInfo from './component/ContactInfo';
// import NotFound from './component/NotFound';
// import Redirects from './MAIN_CONCEPTS/Redirects';
// import Login from './component/Login';
// import Form from './component/Form';
// import DashBoard from './component/DashBoard';
import SidebarContainer from './MAIN_CONCEPTS/RouteTransitionAnimation/SlideSidebar/SlideSidebar';

// LAZY LOADED
const About = React.lazy(() => import('./component/About'));
const Contact = React.lazy(() => import('./component/Contact'));
const ContactInfo = React.lazy(() => import('./component/ContactInfo'));
const NotFound = React.lazy(() => import('./component/NotFound'));
const Redirects = React.lazy(() => import('./MAIN_CONCEPTS/12.Redirects'));
const Login = React.lazy(() => import('./component/Login'));
const DashBoard = React.lazy(() => import('./component/DashBoard'));
const Form = React.lazy(() => import('./component/Form'));

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="sidebar" element={<SidebarContainer />} />
          <Route path="about" element={<About />} />
          <Route path="redirects" element={<Redirects />} />

          <Route path="contact" element={<Contact />}>
            <Route path="info/:data/:id" element={<ContactInfo />} />
          </Route>
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
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
