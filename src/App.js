import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import SalesList from "./pages/SalesList";
import SalesWrite from "./pages/SalesWrite";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sales-list" element={<SalesList />} />
        <Route path="/sales-write" element={<SalesWrite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
