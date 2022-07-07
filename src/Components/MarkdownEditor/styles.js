import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
`;

const Textarea = styled.textarea`
  border: 3px solid #ccc;
  padding: 10px;
  font-size: 15px;
  min-width: 50%;
  max-width: 50%;
  resize: none;
`;

const StyledDiv = styled.div`
  background-color: #bfb9b9;
  color: #000;
  min-width: 50%;
  max-width: 50%;
`;

export { Wrapper, Textarea, StyledDiv };
