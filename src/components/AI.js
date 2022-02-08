import React, {useEffect} from 'react';

const AI = () => {
    useEffect(() => {
        fetch("https://google-search3.p.rapidapi.com/api/v1/search/q=kobe%20bryant", {
            "method": "GET",
            "headers": {
                "x-user-agent": "desktop",
                "x-proxy-location": "US",
                "x-rapidapi-host": "google-search3.p.rapidapi.com",
                "x-rapidapi-key": "0d3bf83147msh833889ef6e1b1b7p159116jsn726d31bf4258"
            }
        })
        .then(response => {
            console.log(response.json().then(res => console.log(res)));
        })
        .catch(err => {
            console.error(err);
        });
    },[])
  return (
    <div>

    </div>
  );
};

export default AI;
