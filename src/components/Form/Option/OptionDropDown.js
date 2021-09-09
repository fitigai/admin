import React from "react"

function OptionDropDown() {
  return (
    <>
      <form action="#" class="form-mobile">
        <div class="select-box">
          <div class="options-container">
            <a href="#">
              <div class="option is-active ">
                <label for="option-1">1221</label>
              </div>
            </a>
          </div>
          <div class="field-inline selected">
            <span>23332</span>
            <svg class="triangle" height="5.15" viewbox="0 0 9.339 5.15" width="9.339" xmlns="http://www.w3.org/2000/svg">
              <path d="M5,8.8.5,4.7a.52.52,0,0,1,0-.8.52.52,0,0,1,.8,0L5,7.2,8.7,3.8a.608.608,0,0,1,.8,0,.608.608,0,0,1,0,.8Z" id="triangle" transform="translate(-0.311 -3.65)" />
            </svg>
          </div>
        </div>
      </form>
    </>
  )
}

export default OptionDropDown
