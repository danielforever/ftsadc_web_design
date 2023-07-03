import * as React from 'react';
import { useEffect } from 'react'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Login from '@mui/icons-material/Login';
import useAuth from '../../hooks/useAuth'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { useSendLogoutMutation } from '../../features/auth/authApiSlice'

const DASH_REGEX = /^\/dash(\/)?$/
const POSTER_REGEX = /^\/dash\/posters(\/)?$/
const USERS_REGEX = /^\/dash\/users(\/)?$/


export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { username, isManager, isAdmin } = useAuth()
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `./login`; 
    navigate(path);
  }
  const { pathname } = useLocation()

  const [sendLogout, {
      isLoading,
      isSuccess,
      isError,
      error
  }] = useSendLogoutMutation()

  useEffect(() => {
      if (isSuccess) navigate('/')
  }, [isSuccess, navigate])

  if (isLoading) return <p>Logging Out...</p>

  if (isError) return <p>Error: {error?.data?.message}</p>

  let dashClass = null
  if (!DASH_REGEX.test(pathname) && !POSTER_REGEX.test(pathname) && !USERS_REGEX.test(pathname)) {
      dashClass = "dash-header__container--small"
  }
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography> */}
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {
          !(username) &&
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
}
        {
          (username) &&
          <MenuItem onClick={handleClose}>
            <Avatar /> {username}
          </MenuItem>
        }
        {
          (username) &&
          <Divider />
        }
        {
          (isManager || isAdmin) &&
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem>
        }
        {
          (username) &&
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
        }
        {
          (username) &&
          <MenuItem onClick={sendLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        }
        {
          !(username) &&
        <MenuItem onClick={routeChange}>
          <ListItemIcon>
            <Login fontSize="small" />
          </ListItemIcon>
          Login
        </MenuItem>
}
      </Menu>
    </React.Fragment>
  );
}