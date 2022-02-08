import React, {useEffect, useState} from 'react';
import { Space2 } from './Images';
import { useData } from '../Context/DataContext';
import ImageCard from '../ImageCard';
import NavBar from '../NavBar';
import { Oval } from 'react-loader-spinner';


const Images = () => {
    const {data} = useData()
    const [retrieve, setRetrieve] = useState([])
    const [loading, setLoading] = useState(false)

    const retrieveData = () => {
        fetch(`https://google-search3.p.rapidapi.com/api/v1/images/q=${data}`, {
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
            setRetrieve(res?.image_results)
            setLoading(true)
        }))
        .catch(err => {
            console.error(err);
        });
    }

    useEffect(() => {
        console.log(data)
        retrieveData()
    }, [])

  return (
    <div>
        <NavBar/>
        {
            loading
            ?
            <div className="margin">
                <Space2>  
                    {
                        retrieve.map((item, index) => {
                            return <ImageCard url={item.link.href} imageUrl={item.image.src} description={item.link.title}/>
                        })
                    }
                </Space2>   
            </div>
            :
            <div className='spinner'>
             <Oval color="#00BFFF" height={80} width={80} />
           </div>
        }
    </div>
  )};

export default Images;
