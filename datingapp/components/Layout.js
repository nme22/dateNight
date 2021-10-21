import DateNavbar from './Navbar';
import Footer from './Footer';
import { VStack } from '@chakra-ui/react';

const Layout = ({ children }) => {
  return (
    <VStack>
      <DateNavbar />
      {children}
      <Footer />
    </VStack>
  );
};

export default Layout;
