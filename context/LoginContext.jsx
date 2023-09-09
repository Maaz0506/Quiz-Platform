import { createContext,useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

export const LoginContext=createContext({})
export const DataProvider = ({ children }) => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [token,setToken]=useState("")


const url = "http://localhost:4000/api/auth/login";
const navigate = useNavigate();
const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const data = await axios.post(
      url,
      {
        email: email,
        password: password,
      },
      
    );
    setToken(data.data.accessToken);
    if (data.status === 200) {
      navigate("/dashboard");
    }
  } catch (error) {
    console.log(error);
  }
};

return (
    <LoginContext.Provider
      value={{
      email:email,
      password:password,
      token:token,
      setEmail:setEmail,
      setPassword:setPassword,
      handleLogin:handleLogin,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
    }
    export default LoginContext;

DataProvider.propTypes = {
  children: PropTypes.any,
};
