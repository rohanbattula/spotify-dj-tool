import React, { useState, useEffect } from 'react';
import LoginPage from './login_page';
import MainPage from './main_page';
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

function Home() {
    const [user, setUser] = useState(null);



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
                    <LoginPage/>
                )}
                {user && (
                    <MainPage user={user}/>
                )}
            </Container>


        </div>
    );
}

export default Home;