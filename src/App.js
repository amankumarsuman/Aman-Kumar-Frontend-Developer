import { Route, Routes } from "react-router-dom";
import CapsulesTable from "./components/datagrid/CapsulesTable";
import DragonTable from "./components/datagrid/DragonTable";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./components/pages/LandingPage";
import CustomizedDialogs from "./components/popupDialogue/PopupDialogue";
function App() {
  return (
    <>
      {/* <CustomizedDialogs /> */}
      {/* <LandingPageNew /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route exact path="/capsule" element={<CapsulesTable />} />
        <Route exact path="/dragon" element={<DragonTable />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
