import React, {useState, createContext, Children, useContext, useEffect} from 'react';

const dataContext = createContext()

export const useData = () => {
    return useContext(dataContext)
}

const DataContext = ({children}) => {
    const [data, setData] = useState('tesla')
    const [toggle, setToggle] = useState(false)

    const switchLight = () => {
        setToggle(!toggle)
    }

    const getData = (value) => {
        setData(value)
    }
   
    const value = {
        getData,
        data,
        switchLight,
        toggle
    }
  return (
    <dataContext.Provider value ={value}>
        {children}
    </dataContext.Provider>
  )
};

export default DataContext;
