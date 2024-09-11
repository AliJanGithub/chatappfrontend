import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';
import axios from 'axios';

export default function useSeend() {
  const { messages, setMessages, selectedUser } = useContext(UserContext);

  const sendMyMessages = async (message) => {
    if (!selectedUser) {
      console.log("No user selected");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      // Sending the message to the selected user via POST request
      const response = await axios.post(
        `http://localhost:5000/send/${selectedUser._id}`,
        { message }, // Sending the message in the request body
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;
      
      // Add the new message to the current list of messages
      setMessages([...messages, data]);

      console.log("Message sent:", data); // Log the message sent
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return { sendMyMessages };
}
