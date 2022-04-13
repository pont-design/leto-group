import React from 'react'

export const CustomRadioButton = () => {
  return (
    <div>
      <div class="form_radio_btn">
        <input id="radio-1" type="radio" name="radio" value="1" checked />
        <label for="radio-1">Radio button 1</label>
      </div>

      <div class="form_radio_btn">
        <input id="radio-2" type="radio" name="radio" value="2" />
        <label for="radio-2">Radio button 2</label>
      </div>

      <div class="form_radio_btn">
        <input id="radio-3" type="radio" name="radio" value="3" />
        <label for="radio-3">Radio button 3</label>
      </div>

      <div class="form_radio_btn">
        <input id="radio-4" type="radio" name="radio" value="4" disabled />
        <label for="radio-4">Disabled</label>
      </div></div>
  )
}
