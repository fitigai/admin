import React from "react"
import { Pane, Tablist } from "evergreen-ui"
import { AsideMain, AsideLink } from "./Aside.elements"

function AsideNav() {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [tabs] = React.useState(["Dashboard", "Users", "Identities"])
  return (
    <AsideMain>
      <Pane display="flex" height={240}>
        <Tablist marginTop={50} marginBottom={16} flexBasis={240} marginRight={24}>
          {tabs.map((tab, index) => (
            <ul key={tab} id={tab} onSelect={() => setSelectedIndex(index)} isSelected={index === selectedIndex} aria-controls={`panel-${tab}`}>
              <li>
                <AsideLink to={tab}>{tab}</AsideLink>
              </li>
            </ul>
          ))}
        </Tablist>
      </Pane>
    </AsideMain>
  )
}

export default AsideNav
