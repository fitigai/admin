import React, { useState } from "react"
import { OptionForm, SelectBox, OptionContainer, FieldOptions, SvgTriangle, OptionList } from "./Option.elements"

function OptionDropDown() {
  const [isActive, setIsaActive] = useState(false)
  const [isSelected, setIsSelected] = useState(false)
  const [option, setOption] = useState("-")

  // selectOption: "-",
  //   showSelect: false
  function handleOption() {
    setIsaActive(true)
  }
  function handleSelection() {
    setIsaActive(false)
  }

  function toggleHandler(event) {
    event.stopPropagation()
    setIsaActive(!isActive)

    const handler = event => {
      if (isActive == true && !this.optionsRef.current.contains(event.target)) {
        setIsaActive(!isActive)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => {
      document.removeEventListener("mousedown", handler)
    }
  }

  function onSelect(event) {
    event.stopPropagation()
    let target = event.target.parentNode.firstElementChild
    if (target.value) {
      setOption(target.name)
      setIsaActive(!isActive)
      this.props.products.forEach(actionFilter => {
        if (actionFilter.identifier === target.value) {
          this.props.filterByMerchant(actionFilter)
        }
      })
    }
  }
  return (
    <>
      <SelectBox>
        <div className="is-selected" onClick={toggleHandler}>
          {props.merchant.name ? props.merchant.name : selectOption}
        </div>
        <OptionContainer className={showSelect ? "is-active" : ""} ref={optionsRef}>
          {this.props.products.map(option => {
            return (
              <div className="option" key={option.identifier}>
                <input type="radio" className="radio" id={option.identifier} value={option.identifier} name={option.name} />
                <label htmlFor={option.identifier} onClick={onSelect}>
                  {option.name}
                </label>
              </div>
            )
          })}
        </OptionContainer>
      </SelectBox>
    </>
  )
}
