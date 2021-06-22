import React from "react"

function Container(props) {
  return (
    <div className={props.transition ? "transition-container" : ""}>
        <main className={"container " + (props.wide ? "" : "container--simple")}>{props.children}</main>
    </div>
  )
}

export default Container
