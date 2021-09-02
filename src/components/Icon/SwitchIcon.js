import React from "react"
import { Mail, ChatBubble } from "./Icons-list"

function SwicthIcon(props) {
  switch (props.icon) {
    case `chatBubble`:
      return <ChatBubble colorIcon={props.colorIcon} heightIcon={props.heightIcon} />
    case "mail":
      return <Mail colorIcon={props.colorIcon} heightIcon={props.heightIcon} />
    default:
      console.log(`No icons`)
  }

  return (
    <button>
      <p>No Icon here</p>
    </button>
  )
}

export default SwicthIcon
