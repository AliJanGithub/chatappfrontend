import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useNavigation

function useCheck() {
  const [alluserinfi, setalluserinfo] = useState([]);
  const navigate = useNavigate(); // Use useNavigate

  useEffect(() => {
    const checker = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login"); // Redirect to login if no token
          return;
        }
        const response = await axios.get(`http://localhost:5000/getallusers`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setalluserinfo(response.data);
        console.log(response.data[0]) // Set the user info
      } catch (error) {
        console.log(error);
      }
    };

    checker(); // Call the checker on component mount
  }, [navigate]); // Include navigate in dependency array

  return { alluserinfi };
}

export default useCheck;
