import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Search from './Search';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const StyledLink = styled(Link)(({ theme }) => ({
  margin: theme.spacing(1, 1.5),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1, 1.5),
}));

const ToolbarContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

function Header({ isAuthenticated, userName, onSearch }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <StyledAppBar position="static" color="default" elevation={0}>
        <Toolbar>
          <ToolbarContainer sx={{flexGrow:1}}>
            <Typography variant="h6" color="inherit" noWrap>
              <StyledLink
                component={NavLink}
                to="/"
                underline="none"
                color="textPrimary"
              >
                Blog
              </StyledLink>
            </Typography>
            <Search onSearch={onSearch} />
          </ToolbarContainer>


          {isAuthenticated ? (
            <>
              <Typography variant="body2" color="textPrimary">
                Welcome, {userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase()}
              </Typography>
              <StyledButton
                color="primary"
                variant="outlined"
                component={NavLink}
                to="/logout"
              >
                Logout
              </StyledButton>
            </>
          ) : (
            <>
              <StyledLink
                color="textPrimary"
                href="#"
                component={NavLink}
                to="/register"
              >
                Register
              </StyledLink>
              <StyledButton
                color="primary"
                variant="outlined"
                component={NavLink}
                to="/login"
              >
                Login
              </StyledButton>
            </>
          )}
        </Toolbar>
      </StyledAppBar>
    </React.Fragment>
  );
}

export default Header;

