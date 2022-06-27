import styled from "styled-components";

export const ListWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  width: 50px;
  height: 50px;
  border: 1px solid #c1b492;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: ${({ active }) => (active ? "#b662c1" : "none")};
  &:hover {
    background-color: #b662c1;
  }
  a {
    text-decoration: none;
    color: #c1b492;
    width: 50px;
  }
  span {
    color: #c1b492;
    width: 50px;
  }
`;

export const Active = styled.li`
  background-color: #b662c1;
`;
