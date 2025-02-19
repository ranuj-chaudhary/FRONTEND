import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/aboutUs" activeClassName="active">
            About Us
          </NavLink>
          <ul>
            <li>
              <NavLink to="/aboutUs/team" activeClassName="active">
                Meet the Team
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutUs/history" activeClassName="active">
                Company History
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/contactUs" activeClassName="active">
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
