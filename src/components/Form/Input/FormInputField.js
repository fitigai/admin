import React, { useState } from "react"
import { FieldInput, FieldLabel, Input } from "./Form.elements"

function FormInputField(props) {
  const [onFocus, setOnFocus] = useState(false)
  const [hasLabel, setHasLabel] = useState(false)

  function onBlurField(event) {
    event.target.value !== "" ? setHasLabel(true) : setHasLabel(false)
    setOnFocus(false)
  }

  function onFocusField(event) {
    event.target.value !== "" ? setHasLabel(true) : setHasLabel(false)
    setOnFocus(true)
  }

  function onClickField() {
    setHasLabel(true)
  }

  function onChangeField(event) {
    event.target.value !== "" ? setHasLabel(true) : setHasLabel(false)
  }

  return (
    <FieldInput className={onFocus ? `is-focused` : ""}>
      <FieldLabel htmlFor="firstname" className={hasLabel ? `has-label` : ""}>
        <small>{props.fieldInputTitle}</small>
      </FieldLabel>
      <Input type="text" id={props.formInputText} name={props.formInputText} value={props.value} required onFocus={onFocusField} onChange={onChangeField} onBlur={onBlurField} onClick={onClickField} />
    </FieldInput>
  )
}

export default FormInputField
