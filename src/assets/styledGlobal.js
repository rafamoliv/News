import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;1,400&display=swap');

    * {
        margin: 0;
        padding: 0:
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
        font-family: 'Roboto', sans-serif;
    }

    body {
        background: radial-gradient(#e5e5e5, #fff, #e5e5e5);
        overflow-x: hidden;
    }
`;
