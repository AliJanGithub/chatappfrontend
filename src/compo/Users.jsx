import React, { useState } from 'react';
import User from './User';
import useCheck from '../hooks/useGetAllUser';
import SearchBar from './SearchBar';

export default function Users() {
  const { alluserinfi } = useCheck(); // Assume alluserinfi is an array of user objects
  const [search, setSearch] = useState(""); // State for search input

  // Filter users based on search input
  const filteredUsers = alluserinfi.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.sidebarContainer}>
      {/* Search Bar */}
      <SearchBar search={search} setSearch={setSearch} />

      {/* Show filtered users if search is performed, else show all users */}
      {search
        ? filteredUsers.length > 0 
          ? filteredUsers.map((user) => <User key={user._id} user={user} />)
          : <div>No users found</div>
        : alluserinfi.map((user) => <User key={user._id} user={user} />)
      }
    </div>
  );
}

const styles = {
  sidebarContainer: {
    width: '100%',
    maxWidth: '350px',
    backgroundColor: '#f0f0f0',
    height: '100vh',
    overflowY: 'auto',
    padding: '10px 0',
    boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
  },
};
