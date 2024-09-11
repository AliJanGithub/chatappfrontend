function Messages({ msg, isSent }) {
   
      
    return (
      <div style={{
        display: 'flex',
        justifyContent: isSent ? 'flex-end' : 'flex-start', // Right for sent messages, left for received
        padding: '5px',
      }}>
        <div style={{
          backgroundColor: isSent ? 'lightgreen' : 'lightblue',
          padding: '10px',
          borderRadius: '10px',
          maxWidth: '60%',
          wordWrap: 'break-word',
        }}>
          {msg}
        </div>
      </div>
    );
  }
  
  export default Messages;
  