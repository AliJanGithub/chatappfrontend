import React from 'react';
import MessagesAppear from './MessagesAppear';
import SendMessage from './SendMessage';

export default function MessagesScreen() {
  return (
    <div style={styles.container}>
      <MessagesAppear />
      <SendMessage />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh', // Full height of the viewport
    justifyContent: 'space-between', // Space between messages and input
  },
};
