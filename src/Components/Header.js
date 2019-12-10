import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  z-index: 10;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  background-color: white;
  opacity: 0.98;
`;

const HeaderArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75vw;
  margin: 0 auto;
  padding: 0 10px;
`;

const HeaderTitle = styled.div`
  height: 64px;
  color: #ff8906;
  font-size: 30px;
  font-weight: 500;
  text-align: center;
`;

const HeaderNav = styled.ul`
  display: flex;
`;

const NavItem = styled.li`
  padding: 0 14px;
  height: 64px;
  text-align: center;
  color: ${props => (props.current ? "#ff8906" : "rgba(0, 0, 0, 0.5)")};
  &:hover {
    color: #ff8906;
  }
  transition: color 0.05s linear;
  font-size: 19px;
  font-weight: 400;
`;

const SLInk = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <HeaderArea>
      <HeaderTitle>
        <SLInk to="/">Bookcurator</SLInk>
      </HeaderTitle>
      <HeaderNav>
        <NavItem current={pathname === "/count"}>
          <SLInk to="/count">Count</SLInk>
        </NavItem>
        <NavItem current={pathname === "/recent"}>
          <SLInk to="/recent">Recent</SLInk>
        </NavItem>
        <NavItem current={pathname === "/search"}>
          <SLInk to="/search">Search</SLInk>
        </NavItem>
      </HeaderNav>
    </HeaderArea>
  </Header>
));
