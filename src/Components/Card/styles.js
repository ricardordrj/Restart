import styled, { css } from "styled-components";

export const Wrapper = styled.article`
  display: block;
  border-radius: 10px;
`;

export const CardLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #c1b492;
  padding: 5px;

  div {
    width: 150px;
    height: 150px;
    transition: all 0.1s ease-in;
    background-repeat: no-repeat;
    background-position: center center;
    @media (max-width: 800px) {
      width: 220px;
      height: 220px;
    }
    ${({ bgImg }) =>
      css`
        background-image: url(${bgImg});
        background-size: 150px;
        @media (max-width: 800px) {
          width: 220px;
        }
      `}
    &:hover {
      transform: scale(1.1);
    }
  }
`;
