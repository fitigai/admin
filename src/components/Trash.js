import React from "react"
import { Tooltip, IconButton, TrashIcon, Pane, Dialog } from 'evergreen-ui'

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
      <div onClick={() => setIsShown(true)} className="table-action">
        <Tooltip marginRight={5} content="Trash title">
          <IconButton icon={TrashIcon} />
        </Tooltip>
      </div>
    </Pane>
  )
}

export default Trash