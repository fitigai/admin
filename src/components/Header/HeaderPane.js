import React from "react"
import OptionDropDown from "../Form/Option/OptionDropDown"
import { HeaderPaneParams, TitleTwo } from "./Header.elements"

function HeaderPane() {
  return (
    <HeaderPaneParams>
      <TitleTwo>New users list</TitleTwo>
      <OptionDropDown />
    </HeaderPaneParams>
  )
}

export default HeaderPane
