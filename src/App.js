import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import SalesList from "./pages/SalesList";
import SalesWrite from "./pages/SalesWrite";
import SignUp from "./pages/SignUp";
import { useEffect, useState } from "react";
import LogIn from "./components/user/LogIn";
import SalesUpdate from "./pages/SalesUpdate";

function App() {
  const [isLogIn, setIsLogIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [dbData, setDbData] = useState([]);

  useEffect(() => {
    const sessionUser = sessionStorage.getItem(
      "firebase:authUser:AIzaSyD4rTHSLEpLNQ_lpXs926g4N8RDc2fldmo:[DEFAULT]"
    );
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
        {isLogIn && (
          <Route
            path="/sales-write"
            element={<SalesWrite userData={userData} />}
          />
        )}
        {isLogIn && (
          <Route
            path="/sales-list/*"
            element={<SalesList userData={userData} />}
          />
        )}
        {isLogIn && (
          <Route
            path="/sales-update"
            element={
              <SalesUpdate
                userData={userData}
                setDbData={setDbData}
                dbData={dbData}
              />
            }
          />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
