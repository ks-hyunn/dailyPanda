import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import SalesList from "./pages/SalesList";
import SalesWrite from "./pages/SalesWrite";
import SignUp from "./pages/SignUp";
import { useEffect, useState } from "react";
import LogIn from "./components/user/LogIn";

function App() {
  const [isLogIn, setIsLogIn] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const sessionKey = sessionStorage.key("firebase");
    const sessionUser = sessionStorage.getItem(sessionKey);
    if (sessionUser) {
      setUserData(JSON.parse(sessionUser));
      setIsLogIn(true);
    }
  }, [isLogIn]);

  return (
    <BrowserRouter>
      <Header isLogIn={isLogIn} setIsLogIn={setIsLogIn} userData={userData} />
      <Routes>
        <Route
          path="*"
          element={<Home setIsLogIn={setIsLogIn} isLogIn={isLogIn} />}
        />
        <Route
          path="/log-in"
          element={<LogIn setUserData={setUserData} setIsLogIn={setIsLogIn} />}
        />
        {!isLogIn && (
          <Route path="/sign-up" element={<SignUp setIsLogIn={setIsLogIn} />} />
        )}
        {isLogIn && <Route path="/sales-write" element={<SalesWrite />} />}
        {isLogIn && <Route path="/sales-list" element={<SalesList />} />}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
