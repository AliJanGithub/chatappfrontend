import React from 'react';

export default function SearchBar({ search, setSearch }) {
  return (
    <div style={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)} // Set search term via props
        value={search}
        style={styles.searchInput}
      />
      <button style={styles.searchButton} >Search</button>
    </div>
  );
}

const styles = {
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px',
    marginBottom: '10px',
    backgroundColor: '#f1f1f1',
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  searchInput: {
    width: '300px',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '8px 0 0 8px',
    outline: 'none',
    boxShadow: 'inset 0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  searchButton: {
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '0 8px 8px 0',
    cursor: 'pointer',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease',
  },
};
