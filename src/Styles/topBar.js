import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0px;
        padding: 0px;
        font-family: Rubik, Arial, Helvetica, sans-serif;
    }
`;

export const TopBar = styled.div`
  background-color: #1d4657;
  position: static;
  overflow: hidden;
  /* Style the links inside the navigation bar */
  img {
    height: 44px;
  }
  a {
    float: right;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  /* Change the color of links on hover */
  a:hover {
    background-color: #ddd;
    color: black;
  }

  /* Add a color to the active/current link */
  a.active {
    background-color: #4caf50;
    color: white;
  }
`;
