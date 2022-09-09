import React, { useState } from 'react'

const SearchInput = ({ value, onChange }) => {
  const [displayValue, setDisplayValue] = useState(value)
  function handleChange(e) {
    onChange(e.target.value)
  }

  return (
    <div className="text-input">
      <input type="search" value={displayValue} onChange={handleChange} />
    </div>
  )
}

export default SearchInput
