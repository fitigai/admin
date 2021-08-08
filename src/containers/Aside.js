import React from "react"
import { Link } from "react-router-dom"
import { Pane, Tablist, SidebarTab } from 'evergreen-ui'


function Aside() {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [tabs] = React.useState(['Dashboard', 'Users', 'Identities'])
  return (
    <aside className="aside-main">
     <Pane display="flex" height={240}>
      <Tablist marginTop={50} marginBottom={16} flexBasis={240} marginRight={24}>
        {tabs.map((tab, index) => (
          <SidebarTab
            key={tab}
            id={tab}
            onSelect={() => setSelectedIndex(index)}
            isSelected={index === selectedIndex}
            aria-controls={`panel-${tab}`}
          >
            <Link to={tab}>{tab}</Link>
          </SidebarTab>
        ))}
      </Tablist>
    </Pane>
    </aside>
  )
}

export default Aside