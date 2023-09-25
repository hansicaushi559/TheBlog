import { useState } from 'react';
import { TextField } from '@mui/material';

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <TextField
      sx={{ width: '35%', marginLeft: '30px' }}
      label="Search"
      variant="outlined"
      size="small"
      placeholder="Enter your search query"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleSearch();
        }
      }}
    />
  );
};

export default Search;
