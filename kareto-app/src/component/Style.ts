import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WordInput = styled.input`
  outline: none;
  height: 2rem;
  width: 20rem;
  margin-top: 2rem;
`;

export const SubmitButton = styled.input`
  color: white;
  background-color: blue;
  border: none;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  cursor: pointer;
  :hover {
    background-color: #0d3ba8;
  }
`;

export const ResultWrapper = styled.div`
  align-self: start;
  p {
    margin-top: 1rem;
  }
  span {
    color: red;
  }
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
`;
