import React from "react"
import { ButtonLink } from "./button.elements"

function Button(props) {
  return (
    <>
      <ButtonLink primary={props.apparance} to={props.to}>
        {props.children}
      </ButtonLink>
    </>
  )
}

export default Button
