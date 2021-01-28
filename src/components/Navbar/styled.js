import styled from "styled-components";

export const NavbarContainer = styled.div`
  *{
    justify-content: right !important;
    z-index: 123;
  }
  
  .menu-bars {
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
    justify-content: right !important;
  }

  .nav-menu {
    background-color: #060b26;
    width: 250px;
    height: 100vh;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%; 
    transition 850ms;
  }

  .nav-menu.active {
    left: 0;
    transition: 350ms;
  }

  .nav-text {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;
  }

  .nav-text a {
    text-decoraction: none;
    color: #f5f5f5;
    font-size: 18px;
    width 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 5px;
  }

  .nav-text a:hover,
  .nav-text svg:hover {
    color: #060b26 !important;
    background-color: #f5ffff; 
  }

  .nav-menu-items {
    width: 100%;
  }

  .navbar-toggle {
    background-color: #060b26;
    width 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
  }

  span {
    margin-left: 16px;
  }

  a {
    text-decoration: none;
  }
`;

export const NewsImg = styled.img`
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  margin: auto;
  cursor: pointer;
`;

export const NavbarToggle = styled.div`
  background-color: #060b26;
  height: 90px;
  display: flex;
`;
