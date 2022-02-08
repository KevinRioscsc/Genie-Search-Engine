import styled from "styled-components";
import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    body {
        background: ${props => (props.toggle ?  '#171717' : 'whitesmoke')};
    }
    p {
        color: ${props => (props.toggle ? 'white' : 'black')};
    }
    h1{
        color: ${props => (props.toggle ? 'white' : 'black')};
    }
    a{
        color: ${props => (props.toggle ? 'white' : 'black')};
    }
    h2{
        color: ${props => (props.toggle ? '#8ab4f8' : '#106cff')};
    }
    .search-bar input {
        box-shadow:  ${props => (props.toggle ? '0 0 0 0.4em #f1f1f1 inset' : '0 0 0 0.4em #171717 inset')};
      }
    .search-bar input:focus,
    .search-bar input:valid {
        color: ${props => (props.toggle ? '' : 'black')};;

      background: ${props => (props.toggle ? '#3d3d3d' : '#fff')}; 
      box-shadow: 0 0 0 0.1em #3d3d3d inset;
    }
    .search-btn {
      background: ${props => (props.toggle ? '#f1f1f1' : '#171717')}; 
    }
    
`

export const Nav = styled.nav`
    max-width:1700px;
    margin: 0 auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
export const NavMargin = styled.div`
    margin: 0 50px;
`
export const NavWrapper = styled.div`
   
  
    border-bottom:1px solid #4b4b4b;
`

export const Logo = styled.div`
`
export const Name = styled.h1`
    font-size:50px;
    @media (max-width: 660px){
        font-size:30px;
    }
`
export const Search = styled.div`
    display:flex;
    color: ${props => (props.toggle ? 'white' : 'black')};
    flex-direction:column;
    justify-content:center;
    align-items:center;
    
`
export const List = styled.div`
    display:flex;
    gap:20px;
`
export const Item = styled.div`
   
    display:flex;
    gap:10px;
`
export const Icon = styled.div`
   
`
export const Switch = styled.div`
    display:flex;
    gap:10px;
`
export const Som = styled.h1`
`