import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import SalesList from "./pages/SalesList";
import SalesWrite from "./pages/SalesWrite";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sales-list" element={<SalesList />} />
        <Route path="/sales-write" element={<SalesWrite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
