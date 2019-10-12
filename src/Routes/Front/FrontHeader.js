import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Search from "../Search";
import FrontSearch from "../FrontSearch";

const Header = styled.header`
  display: flex;
  flex-direction: column;
  margin-top: 120px;
  justify-content: center;
`;

const HeaderArea = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;
  width: 75vw;
  margin: 0 auto;
  padding: 0 10px;
`;

const HeaderTitle = styled.div`
  height: 64px;
  color: #ff8906;
  font-size: 50px;
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
        <SLInk to="/">Commentor</SLInk>
      </HeaderTitle>
      <FrontSearch />
      <HeaderNav>
        <NavItem current={pathname === "/count"}>
          <SLInk to="/count">Count</SLInk>
        </NavItem>
        <NavItem current={pathname === "/recent"}>
          <SLInk to="/recent">Recent</SLInk>
        </NavItem>
      </HeaderNav>
    </HeaderArea>
  </Header>
));
