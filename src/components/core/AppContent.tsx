import HeaderSection from '../core/HeaderSection';
import CustomerDetailsSection from '../customer/CustomerDetailsSection';
import CustomerManagementSection from '../interactions/CustomerManagementSection';
import Footer from './Footer';


const AppContent = () => {
  return (
    <>
      <HeaderSection />
      <CustomerDetailsSection />

      <CustomerManagementSection />
      <Footer />
    </>
  );
};

export default AppContent;
/*

import { TestSearchProvider } from "../interactions/testsearch/TestSearchContext";
import { TestSearchInput } from "../interactions/testsearch/TestSearchInput";
import TestContactList from "../interactions/testsearch/TestContactList";

export default function App() {
  return (
    <TestSearchProvider>
      <div style={{ maxWidth: "400px", margin: "20px auto" }}>
        <TestSearchInput />
        <TestContactList />
      </div>
    </TestSearchProvider>
  );
}
*/