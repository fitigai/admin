import React from "react"

function Container(props) {
  return (
    <div className={props.transition ? "transition-container" : ""}>
        <main>{props.children}</main>
    </div>
  )
}

export default Container
