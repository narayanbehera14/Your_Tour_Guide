import React from 'react'
import { Link } from 'react-router-dom'

const header = () => {
  const handleSearch = (e) =>
    e.preventDefault()

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
          <input type='text' placeholder='search...'/>
          <button type='submit'>Go</button>
        </form>
      </div>
    </header>
   
  )
}

export default header
