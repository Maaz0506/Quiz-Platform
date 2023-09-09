import { Route, Routes, BrowserRouter } from "react-router-dom";
import Signup from "./components/forms/Signup";
import Login from "./components/forms/Login";
import Dashboard from "./components/dashboard";


const App = () => {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>

    </>
  );
};

export default App;
