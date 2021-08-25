import React, { useState } from "react"
import { FieldInput, FieldLabel, Input } from "./Form.elements"

function FormInputField() {
  const [inputValues, setInputValues] = useState({
    firstname: "",
    lastname: ""
  })

  function handleFocus(input) {
    if (input.target) {
      input.target.parentNode.classList.add("is-focused", "has-label")
    }
  }

  function handleChange(input) {
    if (input.target.value !== "") {
      input.target.parentNode.classList.add("has-label")
    }
    const { name, value } = input.target
    setInputValues({ ...inputValues, [name]: value })
  }

  function handleBlur(input) {
    if (input.target.value === "") {
      input.target.parentNode.classList.remove("has-label")
    }
    input.target.parentNode.classList.remove("is-focused")
  }

  return (
    <FieldInput>
      <FieldLabel htmlFor="firstname">
        <small>Tapez votre numéro de mobile</small>
      </FieldLabel>
      <Input type="text" id="firstname" name="firstname" required onFocus={handleFocus} onChange={handleChange} onBlur={handleBlur} />
    </FieldInput>
  )
}

export default FormInputField
