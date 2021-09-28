import React from "react"
import OptionDropDown from "../Form/Option/OptionDropDown"
// import Fieldset from "../Form/Fieldset/Fieldset"
import { HeaderPaneParams, TitleTwo } from "./Header.elements"

function HeaderPane() {
  return (
    <HeaderPaneParams>
      <TitleTwo>New users list</TitleTwo>
      <OptionDropDown />
      {/* <Fieldset /> */}
    </HeaderPaneParams>
  )
}

export default HeaderPane
