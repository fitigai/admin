import React, { useState, useRef } from "react"
import { SelectBox, SelectContainer, Selected, Option } from "./Option.elements"
import { ChevronDownIcon } from "evergreen-ui"

function OptionDropDown() {
  const [isActive, SetIsactive] = useState(false)
  const [selectedOption, setSelectedOption] = useState("-")
  const selectDropdown = useRef(false)

  function toggleHandler(event) {
    event.stopPropagation()
    SetIsactive(!isActive)

    const handler = event => {
      if (isActive == true && selectDropdown.current.contains(event.target)) {
        SetIsactive(!isActive)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => {
      document.removeEventListener("mousedown", handler)
    }
  }

  function selectOption(event) {
    event.stopPropagation()
    let target = event.target.children[0].value
    if (target) {
      SetIsactive(!isActive)
      setSelectedOption(target)

      // this.props.products.forEach(actionFilter => {
      //   if (actionFilter.identifier === target.value) {
      //     this.props.filterByMerchant(actionFilter)
      //   }
      // })
    }
  }

  return (
    <>
      <SelectBox>
        <Selected className={isActive ? "is-active" : ""} onClick={toggleHandler}>
          {selectedOption}
          <span>
            <ChevronDownIcon></ChevronDownIcon>
          </span>
        </Selected>
        <SelectContainer className={isActive ? "is-active" : ""} ref={selectDropdown}>
          <Option onClick={selectOption}>
            <input type="radio" id="fitness" name="fitness" value="fitness" />
            <label htmlFor="fitness">Fitness</label>
          </Option>
          <Option onClick={selectOption}>
            <input type="radio" id="running" name="running" value="running" />
            <label htmlFor="running">Running</label>
          </Option>
          <Option onClick={selectOption}>
            <input type="radio" id="yoga" name="yoga" value="yoga" />
            <label htmlFor="yoga">Yoga</label>
          </Option>
          <Option onClick={selectOption}>
            <input type="radio" id="stretching" name="stretching" value="stretching" />
            <label htmlFor="stretching">Stretching</label>
          </Option>
          <Option onClick={selectOption}>
            <input type="radio" id="crossfit" name="crossfit" value="crossfit" />
            <label htmlFor="crossfit">Crossfit</label>
          </Option>
          <Option onClick={selectOption}>
            <input type="radio" id="climbing" name="climbing" value="climbing" />
            <label htmlFor="climbing">Climbing</label>
          </Option>
          <Option onClick={selectOption}>
            <input type="radio" id="football" name="football" value="football" />
            <label htmlFor="football">Football</label>
          </Option>
          <Option onClick={selectOption}>
            <input type="radio" id="basketball" name="basketball" value="basketball" />
            <label htmlFor="basketball">Basketball</label>
          </Option>
        </SelectContainer>
      </SelectBox>
    </>
  )
}

export default OptionDropDown
