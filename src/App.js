
import './App.css';
import { AI, Home, All, Images, News, Videos } from './components';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import DataContext from './components/Context/DataContext';
import Footer from './components/Footer';
import NavBar from './components/NavBar';


function App() {
  return (
    <DataContext>
      <BrowserRouter>
     
        <Routes>
            <Route path = '/' element = {<Home/>}/>
            <Route path = '/All' element = {<All/>}/>
            <Route path = '/Images' element = {<Images/>}/>
            <Route path = '/News' element = {<News/>}/>
            <Route path = '/Videos' element = {<Videos/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </DataContext>
  );
}

export default App;
