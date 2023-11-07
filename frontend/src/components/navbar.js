// Navbar.js
import React from 'react';
import styled from 'styled-components';
// Styled component for the navbar container
const NavbarContainer = styled.nav`
  width: 100%;
  height: 75px; // Adjust the height as needed
  background-color: #333; // Or any color you prefer
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

// Styled component for the logo image
const Logo = styled.img`
  height: 100%; // The logo will fill the height of the navbar
  margin-right: 10px; // Adds some space between the logo and the brand name
`;

// Styled component for the brand name
const BrandName = styled.h1`
  margin-left: 10px; // Adjust the spacing as needed
  font-size: 1.5em; // Adjust the font size as needed
  color: white; // Choose a color that matches your brand
  display: flex;
  align-items: center; // Ensures vertical centering of the brand name
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo src="kratedigger.png"></Logo>
      <BrandName>kratedigger</BrandName>
      {/* Additional navbar content can go here */}
    </NavbarContainer>
  );
};

export default Navbar;