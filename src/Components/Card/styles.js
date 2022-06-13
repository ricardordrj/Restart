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
    ${({ bgImg }) =>
      css`
        background-image: url(${bgImg});
        background-size: 150px;
      `}
    &:hover {
      transform: scale(1.1);
    }
  }
`;
