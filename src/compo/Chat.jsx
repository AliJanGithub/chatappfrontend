import { useEffect, useState } from 'react';
import axios from 'axios';
import Messages from './Messages';
import useCheck from '../hooks/useGetAllUser'; // Custom hook

function Chat() {
  const [userInfo, setUserInfo] = useState(null);
  const [receiverId, setRecId] = useState("");
  const [messages, setMessages] = useState([
    { text: 'Hello, how are you?', isSent: false },
    { text: 'I am good, thanks!', isSent: true }
  ]);
  const [newMessage, setNewMessage] = useState("");
  
  const { checker, alluserinfi = [] } = useCheck(); // Default to an empty array if undefined

  const usersInfo = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/info', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserInfo(response.data.user);
    } catch (err) {
      console.error('Error fetching user info:', err);
    }
  };

  const handleSavedMessages = async () => {
    const senderId = localStorage.getItem("token");
    try {
      const newMsgs = await axios.get(`http://localhost:5000/getmessages/${receiverId}`, {
        headers: {
          Authorization: `Bearer ${senderId}`,
        },
      });
      setMessages([...messages, ...newMsgs.data.messages]);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  useEffect(() => {
    checker();
    usersInfo();
    handleSavedMessages();
  }, [receiverId]); // Trigger when receiverId changes

  const handleSendMessage = async () => {
    if (newMessage.trim() !== '') {
      const senderId = localStorage.getItem("token");

      try {
        await axios.post(
          `http://localhost:5000/send/${receiverId}`,
          { receiverId, message: newMessage },
          {
            headers: {
              Authorization: `Bearer ${senderId}`,
            },
          }
        );

        setMessages([...messages, { text: newMessage, isSent: true }]);
        setNewMessage('');
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h3 style={styles.sidebarHeader}>Users</h3>
        <ul style={styles.userList}>
          {alluserinfi.length > 0 ? (
            alluserinfi.map((user) => (
              <li
                key={user._id}
                onClick={() => setRecId(user._id)} // Corrected the onClick handler
                style={styles.userItem}
              >
                <img
                  src={user.pic}
                  alt={user.name}
                  style={{ height: 30, width: 30, borderRadius: '50%' }}
                />
                <span style={{ marginLeft: 14 }}>{user.name}</span>
              </li>
            ))
          ) : (
            <div style={styles.placeholder}>Loading user information...</div>
          )}
        </ul>
      </div>
      <div style={styles.chatArea}>
        <div style={styles.header}>
          <h2 style={styles.headerTitle}>
            {userInfo ? `Welcome, ${userInfo.name}` : 'Select a user'}
          </h2>
        </div>
        <div style={styles.messagesArea}>
          {messages.map((message, index) => (
            <Messages key={index} msg={message.text} isSent={message.isSent} />
          ))}
        </div>
        <div style={styles.footer}>
          <input
            type="text"
            placeholder="Type a message"
            style={styles.input}
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button style={styles.sendButton} onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    fontFamily: 'sans-serif',
  },
  sidebar: {
    width: '250px',
    backgroundColor: '#f1f1f1',
    borderRight: '1px solid #ddd',
    padding: '10px',
    boxSizing: 'border-box',
  },
  sidebarHeader: {
    fontSize: '18px',
    margin: '0 0 10px',
  },
  userList: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  },
  userItem: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
    margin: 10,
    backgroundColor: '#fff',
    cursor: 'pointer',
    borderRadius: '4px',
    transition: 'background-color 0.2s',
  },
  chatArea: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: 'gray',
    color: '#fff',
    padding: '10px',
    fontSize: '20px',
  },
  headerTitle: {
    margin: '0',
  },
  messagesArea: {
    flex: 1,
    padding: '10px',
    overflowY: 'auto',
  },
  footer: {
    display: 'flex',
    padding: '10px',
    borderTop: '1px solid #ddd',
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
  placeholder: {
    textAlign: 'center',
    color: '#888',
    marginTop: '20px',
  },
};

export default Chat;
