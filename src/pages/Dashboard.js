import React from "react"
import AsideNav from "../components/Aside/AsideNav"
import { DashboardPage, UserListPane, DashboardPane } from "./Pages.elements"

function Dashboard() {
  return (
    <DashboardPage>
      <AsideNav />
      <UserListPane>
        <h1>Hellow user list pan</h1>
      </UserListPane>
      <DashboardPane>
        <h2>Hello world</h2>
      </DashboardPane>
    </DashboardPage>
  )
}

export default Dashboard
