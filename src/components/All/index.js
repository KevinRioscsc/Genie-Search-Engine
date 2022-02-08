import React, {useEffect, useState} from 'react';
import { useData } from '../Context/DataContext';
import SearchCard from '../SearchCard.js';
import { Space } from './All';
import NavBar from '../NavBar';
import {Oval} from 'react-loader-spinner'
const All = () => {
    const {data} = useData()
    const [loading, setLoading] = useState(false)
    const [responseData, setResponse] = useState([])

    const retrieve = () => {
        fetch(`https://google-search3.p.rapidapi.com/api/v1/search/q=${data}`, {
	"method": "GET",
	"headers": {
		"x-user-agent": "desktop",
		"x-proxy-location": "US",
		"x-rapidapi-host": "google-search3.p.rapidapi.com",
		"x-rapidapi-key": "0d3bf83147msh833889ef6e1b1b7p159116jsn726d31bf4258"
	}
        })
        .then(response => response.json().then(res => {
                console.log(res?.results)
                setResponse(res?.results)
                setLoading(true);
        }))
        .catch(err => {
            console.error(err);
        });
    }
    

    useEffect(() => {
        setLoading(false)
        console.log('hello')
        console.log(data)
        retrieve()
    },[data])
  return (
    <div>
         <NavBar/>
         
       {
           loading
           ?
                <div className="margin">
                    <Space>
                    {
                        responseData.map((item, index) => {
                            return  <SearchCard key={index} url={item.link} title={item.title} description={item.description}/>
                        })
                    }
                    
                    </Space>
                </div>
           :
           <div className='spinner'>
             <Oval color="#00BFFF" height={80} width={80} />
           </div>

       }
    </div>
  );
};

export default All;
