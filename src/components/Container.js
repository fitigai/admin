import React from "react"

function Container(props) {
  return (
    <main className={props.wide ? "container-narrow" : ""}>
       {props.children}
    </main>
  )
}

export default Container
