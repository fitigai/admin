import React from "react"
import { EditIcon, Button, Pane, Dialog } from 'evergreen-ui'


function Edit() {
  const [isShown, setIsShown] = React.useState(false)
  return (
   <Pane>
      <Dialog
        isShown={isShown}
        title="Dialog title"
        intent="danger"
        onCloseComplete={() => setIsShown(false)}
        confirmLabel="Delete"
      >
        Are you sure you want to delete this item?
      </Dialog>

      <Button marginRight={5} appearance="minimal" onClick={() => setIsShown(true)}><EditIcon /></Button>
    </Pane>
  )
}

export default Edit 