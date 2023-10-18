import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

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

function Home() {
    const [user, setUser] = useState(null);

    const handleLogin = () => {
        window.location.href = 'http://localhost:8888/login';
    }
    const handleLogout = () => {
        window.location.href = 'http://localhost:8888/logout';
    }
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const userData = urlParams.get('user');
        if (userData) {
            setUser(JSON.parse(decodeURIComponent(userData)));
        }
    }, []);

    return (
        <div className="Home">
            <Container>
                {!user && (
                    <LoginButton onClick={handleLogin}>Login with Spotify</LoginButton>
                )}
                {user && (
                <div>         
                    <div>
                        <h2>Welcome {user}</h2>
                        
                    </div>
                    <button onClick={handleLogout}>Logout</button>
                </div>
                )}
            </Container>


        </div>
    );
}

export default Home;