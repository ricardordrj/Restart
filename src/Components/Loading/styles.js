import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  background-color: #111;
`;

export const LoadingContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 2px;
  transform: translate(-50%, -50%);
`;
