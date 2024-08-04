export const SearchBar = ()=>{
      return <div >

<div className="flex items-center justify-center w-full max-w-2xl mx-auto p-4">
    {/* <!-- Search Bar Container --> */}
    <div className="flex items-center w-full relative">
        {/* <!-- Search Icon --> */}
        {/* <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M3.8 9.5a7.7 7.7 0 1115.4 0 7.7 7.7 0 01-15.4 0z"></path>
            </svg>
        </div> */}
        {/* <!-- Input Field --> */}
        <input 
            type="text" 
            placeholder="Search" 
            className="w-full pl-12 pr-16 py-2 border border-gray-700 text-white rounded-l-full focus:outline-none focus:ring-1 focus:ring-blue-500 bg-gray-800 placeholder-gray-400"
        />
        {/* <!-- Search Button --> */}
        <button 
            type="submit" 
            className="absolute right-0 top-0 bottom-0 bg-gray-700 px-4 py-2 border-l border-gray-600 rounded-r-full hover:bg-gray-600 focus:outline-none"
        >
            <svg className="w-5 h-5 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.427 16.902l4.573 4.573-2.525 2.525-4.573-4.573A9.917 9.917 0 0110 20c-5.523 0-10-4.477-10-10S4.477 0 10 0s10 4.477 10 10c0 2.254-.744 4.331-1.992 5.982l.419.92zM10 2C5.589 2 2 5.589 2 10s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"/>
            </svg>
        </button>
    </div>
    
</div>

      </div>
}