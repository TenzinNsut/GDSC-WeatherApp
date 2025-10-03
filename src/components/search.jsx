import React,{useRef} from 'react'

function Search(props) {
    const searchInput = useRef();
  return (
      <div className='flex items-center space-x-10'>
            <input type="text" value={props.searchData } onKeyDown={() => props.searchWeather} onChange={()=> props.eventHandler(searchInput.current.value)} ref={searchInput} className="capitalize p-[0.5em] outline-none text-white bg-transparent border-b-[rgba(255,255,255,0.25)] border-b-2  placeholder:text-[rgba(255,255,255,0.50)] " placeholder="Location.." />
            <button onClick={props.searchWeather} onKeyDown={props.searchWeather} className="bg-white px-5 py-2">Search</button>
      </div>
    )
  }

export default Search;
