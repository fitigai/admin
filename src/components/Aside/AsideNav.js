import React, { useState } from "react"
import { TabNavigation } from "evergreen-ui"
import { AsideMain, TabNav } from "./Aside.elements"

function AsideNav() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [tabs] = useState(["Traits", "Event History", "Identities"])
  return (
    <AsideMain>
      <TabNavigation marginBottom={16} marginTop={100}>
        {tabs.map((tab, index) => (
          <TabNav key={tab} is="a" href="#" id={tab} isSelected={index === 0}>
            {tab}
          </TabNav>
        ))}
      </TabNavigation>
    </AsideMain>
  )
}

export default AsideNav
