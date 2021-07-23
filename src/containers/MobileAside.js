import React from "react"
import { Avatar, SideSheet, Paragraph, Button, CogIcon } from 'evergreen-ui'

function MobileAside() {
  const [isShown, setIsShown] = React.useState(false)
  return (

    <div>
      <SideSheet isShown={isShown} onCloseComplete={() => setIsShown(false)}>
        <Avatar
            src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
            name="Alan Turing"
            size={100}
          />
        <Paragraph margin={40}>Basic Example</Paragraph>
      </SideSheet>
      <Button onClick={() => setIsShown(true)} marginY={15} iconAfter={CogIcon} marginRight={16}>Settings</Button>
  
      </div>
  )
}

export default MobileAside
