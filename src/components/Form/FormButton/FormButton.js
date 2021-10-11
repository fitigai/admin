import React from "react"
import { SubmitButton } from "./FormButton.elements"

function FormButton(props) {
  return (
    <>
      <SubmitButton type="submit" primary={props.apparance} value={props.value} />
    </>
  )
}

export default FormButton
