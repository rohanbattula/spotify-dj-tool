import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  position: fixed; // Keep it fixed on the left side
  top: 60px;
  left: 0;
  width: 400px; // Adjust the width as you like
  height: 93vh; // Full height of the viewport
  background-color: #f0f0f0; // Light grey background, adjust as needed
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto; // Add scroll for overflowing content
`;


// Styled component for list of names
const NameList = styled.ul`
  list-style-type: none; // Removes the bullets from the list
  padding: 0;
  margin: 0;
`;

// Styled component for each name
const NameItem = styled.li`
  display: flex; // Use flexbox for horizontal alignment
  align-items: center; // Center items vertically
  padding: 10px 0; // Adds some padding above and below the name
  border-bottom: 1px solid #ccc; // Adds a separator between items
  &:hover {
    background-color: #e9e9e9; // Change background on hover, optional
  }
`;

// Styled component for the image
const Image = styled.img`
  width: 50px; // Set image width
  height: 50px; // Set image height
  border-radius: 50%; // Make the image round
  margin-right: 10px; // Add some space between the image and the name
  object-fit: cover; // Ensure the image covers the area without stretching
`;

function Sidebar({items}) {

    const showImage = (arr) => {
        if (arr.length > 0){
            return (
                <Image src={arr[0].url}/>
            )
        }
        else{
            return (
                <Image src="kratedigger.png"/>

            )
        }
    }
    // Render the sidebar with the list of names
    return (
        <SidebarContainer>
          <NameList>
            {items.map((obj, index) => (

              <NameItem key={index}>
                {showImage(obj.images)}
                {obj.name}
              </NameItem>
            ))}
          </NameList>
        </SidebarContainer>
      );
    }
    
export default Sidebar;