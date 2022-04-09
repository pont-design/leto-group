import React, { useState } from 'react'

export const CustomDropDown = ({ label }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div><p className="
    tag-text">{label}</p></div>
  )
}
