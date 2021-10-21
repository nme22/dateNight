import DateNavbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="content">
      <DateNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
