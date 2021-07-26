import React from "react"
import { TrashIcon, Button, Pane, Dialog } from 'evergreen-ui'

function Trash() {
  const [isShown, setIsShown] = React.useState(false)
  return (
    <Pane>
      <Dialog
        isShown={isShown}
        title="Dialog title"
        onCloseComplete={() => setIsShown(false)}
        confirmLabel="Custom Label"
      >
        Dialog content
      </Dialog>

      <Button marginRight={5} appearance="minimal" onClick={() => setIsShown(true)}><TrashIcon /></Button>
    </Pane>
  )
}

export default Trash