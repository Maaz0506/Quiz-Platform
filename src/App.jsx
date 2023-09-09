import { Route, Routes } from "react-router-dom";
import Signup from "./components/forms/Signup";
import Login from "./components/forms/Login";
import Dashboard from "./components/dashboard";
import { DataProvider } from "../context/LoginContext";

const App = () => {
  return (
    <>
    <DataProvider>     
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>   
      </DataProvider>
    </>
  );
};

export default App;
