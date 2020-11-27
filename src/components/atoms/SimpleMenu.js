import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderContent>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Top</MenuItem>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Carear</MenuItem>
        <MenuItem onClick={handleClose}>Skill</MenuItem>
        <MenuItem onClick={handleClose}>Learning</MenuItem>
        <MenuItem onClick={handleClose}>Work</MenuItem>
        <MenuItem onClick={handleClose}>Contect</MenuItem>
      </Menu>
    </HeaderContent>
  );
}

const HeaderContent = styled.div`

  button{
    color: #fafafa;
  }
  
`;