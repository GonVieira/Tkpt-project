import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #f4f4f4;
  padding: 10px;
  font-size: 26px;

  &:hover {
    color: #ad0d31;
  }
`;

export const StyledLogoutButton = styled.button`
  text-decoration: none;
  color: #f4f4f4;
  padding: 10px;
  font-size: 26px;
  background-color: #171e22;
  border:none;

  &:hover {
    color: #ad0d31;
  }
`

export const StyledHeaderContentDiv = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;

export const StyledContentTabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledLogResTabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const StyledImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 170px;
`
