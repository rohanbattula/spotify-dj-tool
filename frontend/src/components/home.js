import React, { useState, useEffect } from 'react';

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
            <button onClick={handleLogin}>Login with Spotify</button>
            {user && (
                <div>         
                    <div>
                        <h2>Welcome {user.displayName}</h2>
                        
                        <img src={user.photos[0].value} alt ={user.photos[0].url} width={100} />

                    </div>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}

        </div>
    );
}

export default Home;