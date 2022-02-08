import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavWrapper, Logo, Name, Search, List, Item, Icon, Switch, Som, NavMargin } from './NavBar';
import { useData } from '../Context/DataContext';
import { GlobalStyle } from './NavBar.js';

const NavBar = () => {
    const {getData, toggle, switchLight} = useData()
    const [data, setData] = useState('')
    const change = () => {
        console.log('changed')
    }
  return (
    <div>
        <NavWrapper>
            <NavMargin>
            <Nav>
                <Link to={'/'}>
                    <Logo>
                        <Name>Genie</Name>
                    </Logo>
                </Link>
                <Search toggle = {toggle}>
                    <div class="search-bar">
                        <input onChange={(e) => setData(e.target.value)} required/>
                        <button onClick={() => getData(data)} className="search-btn" >
                            <span>Search</span>
                        </button>
                    </div>
                    <List>
                    <Item>
                        <Icon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                        </Icon>
                        <Link to={'/All'}>
                            All
                        </Link>
                    </Item>
                    <Item>
                        <Icon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-newspaper" viewBox="0 0 16 16">
                            <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"/>
                            <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"/>
                        </svg>
                        </Icon>
                        <Link to={'/News'}>
                           News
                        </Link>
                    </Item>
                    <Item >
                        <Icon >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-images" viewBox="0 0 16 16">
                            <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                            <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"/>
                        </svg>
                        </Icon>
                        <Link to={'/Images'}>
                            Images
                        </Link>
                    </Item>
                   
                </List>
                </Search>
                
                <Switch>
                    {console.log(toggle)}
                    {toggle ? <p>Dark</p> : <p>Light</p>}
                   
                    <label class="switch">
                        <input onChange={switchLight} type="checkbox"/>
                        <span class="slider round"></span>
                    </label>
                </Switch>
                <GlobalStyle toggle = {toggle}/>
            </Nav>
            </NavMargin>
        </NavWrapper>
    </div>
  )};

export default NavBar;
