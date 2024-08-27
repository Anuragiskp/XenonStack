import React from 'react'
import Navbar from './Navbar'
import FreeSolo from './FreeSolo';

function Header() {

  const [isSearching, setIsSearching] = React.useState(false);
  const handleSearch = () =>{
    setIsSearching(!isSearching);
  }

  return (
    <div>
      <div className='header-main'>
        <Navbar handleSearch = {handleSearch} isSearching = {isSearching}/>
      </div>
      {isSearching && <div className='search-bar'><FreeSolo /></div>
      }
    </div>
    
  )
}

export default Header