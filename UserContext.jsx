import axios from "axios";
import { createContext,useState } from "react";
import { useNavigate } from "react-router-dom";


export const UserContext=createContext()
  

export function AuthProvider({children}) {
  

    const [email,setemail]=useState('')
    const [password,setPassword]=useState('')
    const [name,setname]=useState('')
    const [success,setSuccess]=useState(false)
    const [token,settoken]=useState('')

  const [selectedUser,setSelectedUser]=useState(null)
  const [messages,setMessages]=useState('')



    const signUpUser = (name, email, password) => {
        axios.post(
          "http://localhost:5000/api/signup",
          {
            name,
            email,
            password
          }
        )
        .then((res) => {
          console.log(res.data);
          setSuccess(true); // Set success to true if the request is successful
        })
        .catch((err) => {
          console.log(err);
          setSuccess(false); // Set success to false if the request fails
        });
      };


      const loginUser = (email, password) => {
        return axios.post("http://localhost:5000/api/login", {
          email,
          password
        })
        .then((res) => {
          const token = res.data.token;
          console.log("Received token:", token);
          setSuccess(true);
          localStorage.setItem("token", token);
          settoken(token);
          return token; // Ensure this line is present
        })
        .catch((err) => {
          console.log("Login error:", err);
          setSuccess(false);
          return null; // Ensure to return null or some default value in case of error
        });
      };
      
      const getToken=()=>{
        const mytoken= localStorage.getItem("token")
        settoken(mytoken)
      }


      const usersInfo = async () => {
            
        try {
        
          const response = await axios.get("http://localhost:5000/api/info", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          console.log(response.data,"hello");
        } catch (err) {
          console.error("Error fetching user info:", err);
        }
      };
      
     return(

        <UserContext.Provider 
        value={{

        name,
        setname,
        password,
        setPassword,
        email,
        setemail,
        signUpUser,
        setSuccess,
        success,
        loginUser,
        token,
        usersInfo,
        selectedUser,
        setSelectedUser,
        messages,
        setMessages
        
        }}>


            {children}

            
        </UserContext.Provider>
     )

}
