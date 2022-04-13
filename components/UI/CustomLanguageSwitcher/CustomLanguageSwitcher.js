import React, { useState } from 'react'

export const CustomLanguageSwitcher = () => {

  const [isRu, setRu] = useState(true)


  return (
    <div className="custom-language-switcher link-text">
      <button onClick={() => setRu(true)} className={`custom-language-switch ${isRu ? 'custom-language-switch_active' : 'custom-language-switch_disabled'}`}>
        Ru
      </button>
      <button onClick={() => setRu(false)} className={`custom-language-switch ${!isRu ? 'custom-language-switch_active' : 'custom-language-switch_disabled'}`}>
        En
      </button>
    </div>
  )
}
