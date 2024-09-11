import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';

export default function User({ user }) {
   const { setSelectedUser, selectedUser } = useContext(UserContext);
   const handleClick = () => {
     setSelectedUser(user);
   };
   const isSelected = selectedUser?._id === user._id;

   // Generate a unique avatar URL using the user's id
   const randomAvatar = `https://robohash.org/${user._id}?set=set3&size=50x50`;

   return (
     <div
       style={{
         ...styles.userContainer,
         backgroundColor: isSelected ? 'lightblue' : '#fff', // Dynamic background
       }}
       onClick={handleClick}
     >
       <img src={user.pic || randomAvatar} alt={user.name} style={styles.userImage} />
       <div style={styles.userInfo}>
         <span style={styles.userName}>{user.name}</span>
         <span style={styles.userMessage}>Last message preview here</span>
       </div>
     </div>
   );
}

const styles = {
  userContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease-in-out',
  },
  userContainerHover: {
    backgroundColor: '#e8e8e8', // Lighter hover effect
  },
  userImage: {
    height: '50px',
    width: '50px',
    borderRadius: '50%',
  },
  userInfo: {
    marginLeft: '15px',
    display: 'flex',
    flexDirection: 'column',
  },
  userName: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'sans-serif',
  },
  userMessage: {
    fontSize: '14px',
    color: '#999',
    marginTop: '4px',
    fontFamily: 'sans-serif',
  },
};
