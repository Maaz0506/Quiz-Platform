import Form from "./components/forms/Form"
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import Dashboard from "./components/dashboard";

const App = () => {

  return (
    <>
    <BrowserRouter>
         <Routes>
        <Route path="/" element={<Form />}/>
          <Route path="/dashboard" element={<Dashboard />} />
       
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
