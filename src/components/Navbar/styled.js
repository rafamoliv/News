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

  img.centered {
    margin: auto;
    cursor: pointer;
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

  .nav-text a:hover {
    background-color: #1a83ff;
  }

  .nav-menu-items {
    width: 100%;
  }

  .navbar-toggle {
    background-color: ##060b26;
    width 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
  }

  span {
    margin-left: 16px;
  }
`;

export const NewsImg = styled.img`
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  background-color: #fff;
  border-radius: 50%;
  border: 1px solid #060b26;
  height: 125px;
  width: 125px;

  position: fixed;
  right: 0;
  top: 10px;
  margin-right: 25px;
`;

export const NavbarToggle = styled.div`
  background-color: #060b26;
  height: 80px;
  display: flex;
`;
