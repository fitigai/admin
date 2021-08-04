import React from "react"
import { Tooltip, IconButton, EditIcon, Pane, Dialog } from 'evergreen-ui'


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
      <div onClick={() => setIsShown(true)} className="table-action">
        <Tooltip marginRight={5} content="Edit title">
          <IconButton icon={EditIcon} />
        </Tooltip>
      </div>
    </Pane>
  )
}

export default Edit 