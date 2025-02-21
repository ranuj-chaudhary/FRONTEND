
const About = React.lazy(() => import('./component/About'));
const Contact = React.lazy(() => import('./component/Contact'));
const ContactInfo = React.lazy(() => import('./component/ContactInfo'));
const NotFound = React.lazy(() => import('./component/NotFound'));
const Redirects = React.lazy(() => import('./MAIN_CONCEPTS/12.Redirects'));
const Login = React.lazy(() => import('./component/Login'));
const DashBoard = React.lazy(() => import('./component/DashBoard'));
const Form = React.lazy(() => import('./component/Form'));

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
export const appRoutes = [{
    path:"/",
    element:<Layout />,
    
}]