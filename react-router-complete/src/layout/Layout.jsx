import { Outlet } from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';

const Layout = () => {
  return (
    <div className="h-full w-full justify-between ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
