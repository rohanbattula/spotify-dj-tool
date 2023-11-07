import Navbar from "./navbar";
import React, { useState, useEffect } from 'react';
import Sidebar from "./sidebar";




function MainPage({user}){
    const [data, setData] = useState(null);

    const getPlaylists = async () => {
        try {
            const response = await fetch('http://localhost:8888/spotify/getPlaylists', {
                method: 'POST',
                mode:'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    spotifyId: user,
                }),
            });

            const json_response = await response.json();
            const nameArray = json_response.items.map(item => item);
            console.log(nameArray)
            setData(nameArray); // Update the state with the names
            console.log('Response:', data);
        } catch (error) {
            console.error('Error sending POST request:', error);
        }
    };

    useEffect(() => {
        console.log("grabbing playlists")
        getPlaylists(user)
        console.log("showing data")

    }, []); 

    const handleLogout = () => {
        window.location.href = 'http://localhost:8888/logout';
    }
    return (
        <div>
        <Navbar/>
        <div>         
            {data && (<Sidebar items={data}/>)}
            <div>
                <h2>fuck you {user}</h2>
            </div>
            <button onClick={handleLogout}>Logout</button>
    
        </div>
        </div>


    )

}

export default MainPage;