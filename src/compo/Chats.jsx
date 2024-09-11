import MessagesScreen from "./MessagesScreen";
import SIdebar from "./SIdebar";

export default function Chats() {
  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <SIdebar />
      </div>
      <div style={styles.messagesScreen}>
        <MessagesScreen />
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    // Subtle shadow to lift the entire chat UI
  },
  sidebar: {
    width: '20%',
    backgroundColor: '#f0f0f0', // Light gray like WhatsApp's sidebar
    borderRight: '1px solid #ddd', // Separator between sidebar and message screen
    display: 'flex',
    flexDirection: 'column',
  },
  messagesScreen: {
    width: '70%',
    backgroundColor: '#f9f9f9', // Light background for chat area
    display: 'flex',
    flexDirection: 'column',
  },
};
