import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const {password,setPassword,email,setemail,success,loginUser,token}=useContext(UserContext)

  const navigate = useNavigate(); // Get the navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(email, password).then((token) => {
      if (token) {
        alert("Login successful");
        navigate("/chats"); // Redirect to chats after successful login
      }
    });
    
  };
  
    
    

    return (
      <div style={styles.loginSignupContainer}>
        <h2
        style={{
            fontFamily:'sans-serif'
        }}>Login</h2>
        <form style={styles.form}>
          <label style={styles.Fontsall}>Email:</label>
          <input type="email" id="email" value={email} onChange={(e)=>setemail(e.target.value)} style={styles.input} />
          
          <label style={styles.Fontsall}>Password:</label>
          <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} style={styles.input} />
          
          <button type="submit" onClick={handleSubmit} style={styles.submitButton}>Login</button>
        </form>
      </div>
    );
  }
  
  const styles = {
    loginSignupContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },
    input: {
      border: '1px solid #ddd',
      borderRadius: '4px',
      marginBottom: '10px',
      padding: '10px',
    },
    submitButton: {
      backgroundColor: '#007bff',
      border: 'none',
      borderRadius: '4px',
      color: '#fff',
      cursor: 'pointer',
      fontSize: '16px',
      padding: '10px',
      transition: 'background-color 0.3s',
    },
    Fontsall:{
        fontFamily:'sans-serif'
    }
  };
  
  export default Login;
  