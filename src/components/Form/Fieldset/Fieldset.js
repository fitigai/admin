import React from "react"
import { FieldsetContainer } from "./Fieldset.elements"

function Fieldset() {
  return (
    <>
      <FieldsetContainer>
        <div>
          <input list="sport-list" type="text" />
        </div>
        <datalist id="sport-list">
          <option value="fitness" />
          <option value="running" />
          <option value="yoga" />
          <option value="stretching" />
          <option value="crossfit" />
          <option value="climbing" />
          <option value="football" />
          <option value="basketball" />
        </datalist>
      </FieldsetContainer>
    </>
  )
}

export default Fieldset
