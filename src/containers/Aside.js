import React, {useState} from "react"
import { Pane, Tablist, SidebarTab, Paragraph } from 'evergreen-ui'


function Aside() {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [tabs] = React.useState(['Admin Home', 'Event History', 'Identities'])
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
            {tab}
          </SidebarTab>
        ))}
      </Tablist>
    </Pane>
    </aside>
  )
}

export default Aside