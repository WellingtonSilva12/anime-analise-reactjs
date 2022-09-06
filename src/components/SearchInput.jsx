import React from 'react'

const SearchInput = ({ value, onChange }) => {
  function handleChange(e) {
    onChange(e.target.value)
  }

  return (
    <div>
      <input type="search" value={value} onChange={handleChange} />
    </div>
  )
}

export default SearchInput
