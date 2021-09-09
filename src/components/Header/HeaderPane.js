import React from "react"
import OptionDropDown from "../Form/Option/OptionDropDown"
import { HeaderPaneParams, Title_2 } from "./Header.elements"

function HeaderPane() {
  return (
    <HeaderPaneParams>
      <Title_2>New users list</Title_2>
      <OptionDropDown />
    </HeaderPaneParams>
  )
}

export default HeaderPane
