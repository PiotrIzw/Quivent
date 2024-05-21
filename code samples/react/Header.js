// Header.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

const Header = ({ handleSearchTextChange, openFiltersModal }) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>QUIVENT.APP</a>
        </Typography>
        <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
          <InputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            onChange={(e) => handleSearchTextChange(e.target.value)}
            style={{ color: 'inherit', padding: '6px 10px', backgroundColor: '#fff', borderRadius: '4px', flex: 1 }}
          />
          <IconButton type="submit" aria-label="search">
            <SearchIcon style={{ color: 'white' }} />
          </IconButton>
          <IconButton aria-label="filter" onClick={openFiltersModal}>
            <FilterListIcon style={{ color: 'white' }} />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
