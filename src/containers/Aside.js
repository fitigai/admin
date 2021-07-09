import React from "react"
import { Avatar, SideSheet, Paragraph, Button } from 'evergreen-ui'

function Aside() {
  const [isShown, setIsShown] = React.useState(false)
  return (
    <>
      <SideSheet isShown={isShown} onCloseComplete={() => setIsShown(false)}>
        <Avatar
            src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
            name="Alan Turing"
            size={100}
          />
        <Paragraph margin={40}>Basic Example</Paragraph>
      </SideSheet>
      <Button onClick={() => setIsShown(true)}>Show Basic Side Sheet</Button>
    </>
  )
}

export default Aside
