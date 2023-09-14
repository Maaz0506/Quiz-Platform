import { Route, Routes } from "react-router-dom";
import Signup from "./components/forms/Signup";
import Login from "./components/forms/Login";
import Dashboard from "./components/dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { DataProvider } from "../context/DataContext";
import NewQuiz from "./components/quizUI/NewQuiz";
import History from "./components/history/History";

const App = () => {
  
  return (
    <>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/quizUI" element={<NewQuiz />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </DataProvider>
    </>
  );
};

export default App;
