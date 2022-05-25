import styled, { keyframes } from "styled-components";
const blink = keyframes`
  50% {color:black;}
  50% {color:#d2738a;text-shadow:#d2738a 1px 4px 5px;}
  100% {color:#c1b492;text-shadow:#c1b492 1px 1px 6px;}
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const BlackBox = styled.div`
  background-color: #000;
  width: 80%;
  padding: 15px;
  box-shadow: #000 0px 5px 10px;
  text-align: center;
  h1 {
    font-size: 3em;
    animation: ${blink} 2s linear infinite;
  }
`;
