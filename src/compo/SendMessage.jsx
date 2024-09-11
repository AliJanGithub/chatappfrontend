import React, { useContext, useState } from 'react';
import { UserContext } from '../../UserContext';
import useSeend from '../hooks/useSeend';

export default function SendMessage() {
  const { sendMyMessages } = useSeend();
  const [message, setMessage] = useState("");

  const handleSendMessage = async () => {
    if (message.trim() !== "") {
      await sendMyMessages(message);
      setMessage("");
    }
  };

  return (
    <div style={styles.footer}>
      <input
        type="text"
        placeholder="Type a message"
        style={styles.input}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button style={styles.sendButton} onClick={handleSendMessage}>
        Send
      </button>
    </div>
  );
}

const styles = {
  footer: {
    display: 'flex',
    padding: '10px',
    borderTop: '1px solid #ddd',
    position: 'sticky', // Stick to the bottom
    bottom: 0, // Ensure it's at the bottom of the container
    backgroundColor: '#fff', // Ensure the background is consistent
    width: '100%',
  },
  input: {
    flex: 1,
    border: '1px solid #ddd',
    borderRadius: '4px',
    padding: '10px',
    marginRight: '10px',
  },
  sendButton: {
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    padding: '10px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};
