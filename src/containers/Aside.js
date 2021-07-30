import React, {useState} from "react"
import { Avatar, Paragraph, Pane, Tablist, SidebarTab } from 'evergreen-ui'


function Aside() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [tabs] = useState(['Traits', 'Event History', 'Identities'])
  return (
    <aside className="aside-main">
      <Avatar
            src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
            name="Alan Turing"
        size={100}
        className="aside-avatar"
          />
        <Pane display="flex" height={240}>
      <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
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