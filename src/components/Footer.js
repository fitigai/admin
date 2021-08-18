import React from "react"
import { TabNavigation, Tab } from "evergreen-ui"
import { Link } from "react-router-dom"
import styled from "styled-components"

const FooterNav = styled.nav`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  border-top: 1px solid $gray-light;
  padding-top: 10px;
`

function Footer() {
  return (
    <FooterNav>
      <TabNavigation marginBottom={16}>
        <Tab>
          <Link to="/">Home</Link>
        </Tab>
        <Tab>
          <Link to="/about">About-us</Link>
        </Tab>
        <Tab>
          <Link to="/terms">Terms</Link>
        </Tab>
      </TabNavigation>
    </FooterNav>
  )
}

export default Footer
