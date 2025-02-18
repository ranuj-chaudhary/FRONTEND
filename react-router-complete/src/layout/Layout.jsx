import Header from '../component/Header';
import Footer from '../component/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
