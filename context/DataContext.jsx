import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

export const DataContext = createContext({});
export const DataProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const Loginurl = "http://localhost:4000/api/auth/login";
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(Loginurl, {
        email: email,
        password: password,
      });

      const accessToken = data.data.accessToken;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("email", email);
      if (data.status === 200) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DataContext.Provider
      value={{
        email: email,
        password: password,
        setEmail: setEmail,
        setPassword: setPassword,
        handleLogin: handleLogin,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;

DataProvider.propTypes = {
  children: PropTypes.any,
};
