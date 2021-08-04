import React, { useState } from "react"
import {TabNavigation, Tab} from 'evergreen-ui'

function Footer() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [tabs] =useState(['Traits', 'Event History', 'Identities'])
  return (
    <footer>
      <TabNavigation>
        {['Traits', 'Event History', 'Identities'].map((tab, index) => (
          <Tab key={tab} is="a" href="#" id={tab} isSelected={index === 0}>
            {tab}
          </Tab>
        ))}
      </TabNavigation>
    </footer>
  )
}

export default Footer