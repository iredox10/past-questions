import {FaSearch} from 'react-icons/fa'

const Search = ({placeholder}) => {
  return (
    <div className='flex items-center bg-white-color px-4 py-4 rounded-full drop-shadow-xl  '>
        <button ><FaSearch className='hover:bg-secondary-color' /></button>
        <input type="text" name="search" id="search" className='w-full mx-5 outline-none capitalize placeholder:tracking-widest' placeholder={placeholder} />
    </div>
  )
}

export default Search