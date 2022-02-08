import React, {useState} from 'react';
import './home.css'
import Footer from '../Footer';
import { Link, Navigate } from 'react-router-dom';
import { useData } from '../Context/DataContext';

const Home = () => {
   const [sumbit, setSubmit] = useState(false)
   const {getData} = useData()

  return (
      <div className="">
        <div className='home'>
            <div className="header">
                <h1 className='title'>Genie</h1>
                <form class="search-bar">
                    <input onChange={(e) => getData(e.target.value)} type="search" name="search" pattern=".*\S.*" required/>
                    <button  onClick={() => setSubmit(true)}  className="search-btn" type="submit" value= "Submit">
                        <span>Search</span>
                    </button>
                </form>
            </div>
            {
                sumbit && <Navigate to={'/All'}/>
            }
            
    </div>
   
    </div>
  );
};

export default Home;
