import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = ({ onSearch }) => {
  const [search, setSearch] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(search)
  }

  return (
    <header>
      <div className='header-title'>
        It's your tour guide
      </div>

      <div className='header-nav'>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/signin">Sign in</Link>

        <form className='header-search' onSubmit={handleSearch}>
          <input
            type='text'
            placeholder='search...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type='submit'>Go</button>
        </form>
      </div>
    </header>
  )
}

export default Header