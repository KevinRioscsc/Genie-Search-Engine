import React,{useEffect, useState} from 'react';
import { useData } from '../Context/DataContext';
import SearchCard from '../SearchCard';
import { Space } from '../All/All';
import NavBar from '../NavBar';
import { Oval } from 'react-loader-spinner';

const News = () => {
    const {data} = useData()
    const [retrieve, setRetrieve] = useState([])
    const [loading, setloading]= useState(false)

    const retrieveData = () => {
        fetch(`https://google-search3.p.rapidapi.com/api/v1/news/q=${data}`, {
            "method": "GET",
            "headers": {
                "x-user-agent": "desktop",
                "x-proxy-location": "US",
                "x-rapidapi-host": "google-search3.p.rapidapi.com",
                "x-rapidapi-key": "0d3bf83147msh833889ef6e1b1b7p159116jsn726d31bf4258"
            }
        })
        .then(response => response.json().then(res => {
            console.log(res)
            setRetrieve(res?.entries)
            setloading(true)
        }))
        .catch(err => {
            console.error(err);
        });
    }

    useEffect(() => {
        console.log(data)
        retrieveData()
    },[])
  return (
    <div>
        <NavBar/>
        {
            loading
            ?
            <div className="margin">
            <Space>
                {
                    retrieve.map((item, index) => {
                        return <SearchCard key={index} title={item.title} description={item.link}/>
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
  )};

export default News;
