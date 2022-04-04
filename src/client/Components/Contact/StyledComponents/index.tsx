import styled from "styled-components";

export const StyledContactBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #f4f4f4;
  padding: 20px;
`;

export const StyledConectionsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const StyledAnchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  padding: 10px;
  color: #f4f4f4;

  &:hover {
    color: #171e22;
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-delay: 0s;
  }
`;

export const SyledTitle = styled.h1`
  font-size: 50px;
  padding: 10px;
`;
