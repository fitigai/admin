import React from "react"

function Container(props) {
  return (
    <main className={props.transition ? "transition-container" : ""}>
       {props.children}
    </main>
  )
}

export default Container
