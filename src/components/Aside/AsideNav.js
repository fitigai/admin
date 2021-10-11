import React from "react"
import { TabNavigation } from "evergreen-ui"
import { AsideMain, TabNav } from "./Aside.elements"
import { Link } from "react-router-dom"
function AsideNav() {
  return (
    <AsideMain>
      <TabNavigation>
        <TabNav>
          <Link to="/dashboard">Dashboard</Link>
        </TabNav>
        <TabNav>
          <Link to="/users">Users</Link>
        </TabNav>
        <TabNav>
          <Link to="/activities">Activities</Link>
        </TabNav>
        <TabNav>
          <Link to="/logistic">Logistic</Link>
        </TabNav>
      </TabNavigation>
    </AsideMain>
  )
}

export default AsideNav
