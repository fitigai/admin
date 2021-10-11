import React from "react"
import AsideNav from "../components/Aside/AsideNav"
import HeaderPane from "../components/Header/HeaderPane"
import Carduser from "../components/Card/Carduser"
import { DashboardPage, UserListPane, DashboardPane } from "./Pages.elements"

function Dashboard() {
  return (
    <DashboardPage>
      <AsideNav />
      <UserListPane>
        <HeaderPane />
        <Carduser />
      </UserListPane>
      <DashboardPane>
        <header>
          <h2>Hello world</h2>
        </header>
      </DashboardPane>
    </DashboardPage>
  )
}

export default Dashboard
