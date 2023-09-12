import { Route, Routes } from "react-router-dom";
import Signup from "./components/forms/Signup";
import Login from "./components/forms/Login";
import Dashboard from "./components/dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { DataProvider } from "../context/DataContext";
import QuizUI from "./components/quizUI/index";
import NewQuiz from "./components/quizUI/NewQuiz";
import Header from "./components/dashboard/Header";
import Result from "./components/Result";

const App = () => {
  return (
    <>
      {/* <Header/> */}
      <DataProvider>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/quizUI" element={<NewQuiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </DataProvider>
    </>
  );
};

export default App;
