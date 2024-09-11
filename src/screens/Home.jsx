import { useContext, useEffect, useState } from "react";
import SIgnup from "../compo/SIgnup";
import Login from "../compo/Login";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";

function Home() {
  const [isSignup, setIsSignup] = useState(true);
  const {token}=useContext(UserContext)
const naviagte=useNavigate()
  useEffect(() => {
       
    localStorage.getItem("token",token)
    if (token) {
        naviagte("/chats");
    }
   
  }, [naviagte])
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.buttonContainer}>
          <button 
            onClick={() => setIsSignup(true)} 
            style={isSignup ? styles.activeButton : styles.button}
          >
            Signup
          </button>
          <button 
            onClick={() => setIsSignup(false)} 
            style={!isSignup ? styles.activeButton : styles.button}
          >
            Login
          </button>
        </div>
        {isSignup ? <SIgnup /> : <Login />}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f9',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    maxWidth: '400px',
    width: '100%',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#ddd',
    border: 'none',
    borderRadius: '4px',
    color: '#333',
    cursor: 'pointer',
    fontSize: '16px',
    padding: '10px 20px',
    transition: 'background-color 0.3s',
  },
  activeButton: {
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '16px',
    padding: '10px 20px',
    transition: 'background-color 0.3s',
  },
};

export default Home;
