import { Route, Routes } from "react-router-dom";
import CapsulesTable from "./components/datagrid/CapsulesTable";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./components/pages/LandingPage";
function App() {
  return (
    <>
      {/* <LandingPageNew /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route exact path="/capsule" element={<CapsulesTable />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
