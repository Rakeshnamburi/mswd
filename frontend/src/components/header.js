// Header.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab } from '@mui/material';
import { NavLink, Link } from 'react-router-dom';
import klulogo from '../images/klulogo.png';

const Header = () => {
  const [value, setValue] = useState();

  return (
    <div>
      <AppBar sx={{ backgroundColor: 'pink' }} position="sticky">
        <Toolbar>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            {/* Link to the Home component */}
            <img src={klulogo} alt="Logo" width={90} style={{ marginRight: '8px' }} />
            <Typography variant="h5" sx={{ color: '#000000' }}>
              <strong>COUNSELLING AND VISITOR MANAGEMENT SYSTEM</strong>
            </Typography>
          </Link>

          <Tabs
            sx={{ ml: 'auto' }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab
              sx={{ color: '#000000' }}
              component={NavLink}
              to="/signup"
              label="Sign Up"
            />
            <Tab
              sx={{ color: '#000000' }}
              component={NavLink}
              to="/signin"
              label="Sign In"
            />
            <Tab
              sx={{ color: '#000000' }}
              component={NavLink}
              to="/councellor"
              label="Add Councellor"
            />
            <Tab
              sx={{ color: '#000000' }}
              component={NavLink}
              to="/visitor"
              label="Add Visitor"
            />
            <Tab
              sx={{ color: '#000000' }}
              component={NavLink}
              to="/appointment"
              label="Appointment"
            />
            {/* Add the new tab for the Contact component */}
            <Tab
              sx={{ color: '#000000' }}
              component={NavLink}
              to="/contact"
              label="Contact"
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;