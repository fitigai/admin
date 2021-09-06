import React from "react"
import { DashboardContainer } from "../components/Container/Container.elements"
import { AsideNav, AsideList, DashboardPane } from "./Pages.elements"

function Dashboard() {
  return (
    <DashboardContainer>
      <AsideNav />
      <AsideList>
        <div className="dashboard-container">
          <h2 className="txt-center">Hello, Jérémy this is your feed !</h2>
          <p className="txt-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In neque augue, condimentum sed odio et, aliquet tincidunt metus. Vivamus hendrerit risus eu massa facilisis, vitae suscipit augue porta. Quisque sit amet sem sit amet ante congue fermentum nec ac justo. Nullam pulvinar est sit amet dictum tempus. Pellentesque pellentesque justo id tellus fringilla tristique. Ut at fringilla nibh. Integer convallis mauris auctor tincidunt viverra. Quisque venenatis augue euismod purus iaculis volutpat. Nullam ac elit vel massa volutpat sagittis vel at elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla tincidunt magna purus, nec posuere nisl molestie et. Proin sit amet pellentesque urna, ut iaculis orci.</p>
        </div>
      </AsideList>
      <DashboardPane />
    </DashboardContainer>
  )
}

export default Dashboard
