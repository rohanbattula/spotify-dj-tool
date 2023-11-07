import styled from "styled-components";

const LoginButton = styled.button`
  background-color: #1DB954; /* Spotify green */
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1AA34A; /* A slightly darker green for hover */
  }
`;
const TopAlignedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // Center horizontally
  justify-content: flex-start; // Align to the top
  height: 100vh;
  margin: 0; // Remove default margin
`;

// Styled component for the image
const StyledImage = styled.img`
  max-width: 100%; // Responsive width
  height: auto; // Maintain aspect ratio
`;


function LoginPage(){
    const handleLogin = () => {
        window.location.href = 'http://localhost:8888/login';
    }
    return (
        <TopAlignedContainer>
            <StyledImage src="kratedigger.png" alt="Descriptive text" />
            <h1> Kratedigger</h1>
            <LoginButton onClick={handleLogin}>Login with Spotify</LoginButton>

        </TopAlignedContainer>


    )

}

export default LoginPage;