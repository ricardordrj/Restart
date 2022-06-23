import styled, { keyframes } from "styled-components";

const blink = keyframes`
  50% {color:black;}
  50% {color:#d2738a;text-shadow:#d2738a 1px 4px 5px;}
  100% {color:#c1b492;text-shadow:#c1b492 1px 1px 6px;}
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BlackBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #000;
  width: 80%;
  min-height: 100vh;
  padding: 15px;
  border-radius: 10px;
  box-shadow: #000 0px 5px 10px;
  text-align: center;
  margin-top: 15px;
  h1 {
    font-size: 3em;
    animation: ${blink} 2s linear infinite;
  }
  footer {
    width: 80%;
    display: flex;
    margin-bottom: 2%;
    margin-top: auto;
    nav {
      background-color: rgba(210, 115, 138, 0.4);
      width: 100%;
      padding: 10px;
      border-radius: 10px;
      box-shadow: 2px 2px 9px 4px rgba(210, 115, 138, 0.5);
      ul {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        a {
          cursor: pointer;
          text-decoration: none;
          color: #c1b492;
          width: 33%;

          &:link {
            color: #d2738a;
          }

          &:visited {
            color: #d2738a;
          }

          &:hover {
            color: #d2738a;
            animation: ${blink} 1s linear infinite;
          }
          &:active {
            color: #d2738a;
          }
        }
      }
    }
  }
`;
