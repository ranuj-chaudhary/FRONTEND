// 1) provide children route inside any route
<Routes>
  <Route path="/" element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="login" element={<Login />} />
    <Route path="sidebar" element={<SidebarContainer />} />
    <Route path="about" element={<About />} />
    <Route path="redirects" element={<Redirects />} />

    {/* NESTED ROUTE*/}
    <Route path="contact" element={<Contact />}>
      <Route path="info/:data/:id" element={<ContactInfo />} />
    </Route>

    {/* PROTECTED ROUTE */}
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
</Routes>;

// 2) USE OUTLET IN COMPONENT CHILDREN ROUTE ARE PROVIDED
// Use Outlet from react-router-dom to define a parent route and render child
//  components dynamically.

import { Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const DashBoard = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col text-white p-4">
      <h1 className="text-4xl">Dashboard</h1>
      <div className="flex justify-between">
        <p>{location?.state?.auth ? 'Login Successfull' : null}</p>
      </div>

      <div>
        <Link to="/dashboard/form" className="text-blue underline">
          Insert Data
        </Link>
      </div>
      <div className="flex flex-col border-2 bg-amber-700 text-white">
        <h2>User Data</h2>
        <p>Click Insert Data to Get the form</p>
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
