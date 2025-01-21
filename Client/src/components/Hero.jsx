import search from '../assets/search_icon.svg'
import location from '../assets/location_icon.svg'
import { useContext, useRef } from 'react'
import { AppContext } from '../context/AppContext'
import microsoft from '../assets/microsoft_logo.svg'
import walmart from '../assets/walmart_logo.svg'
import accenture from '../assets/accenture_logo.png'
import samsung from '../assets/samsung_logo.png'
import amazon from '../assets/amazon_logo.png'
import adobe from '../assets/adobe_logo.png'

function Hero() {
  const {setSearchFilter,setIsSearched} = useContext(AppContext)
  const setTitle = useRef(null)
  const setLocation = useRef(null)
  const onSearch = () => {
    setSearchFilter({
      title: setTitle.current.value,
      location: setLocation.current.value
    })
    setIsSearched(true)
    console.log({
      title: setTitle.current.value,
      location: setLocation.current.value
    })
  }
  const logos = [microsoft,walmart,accenture,samsung,amazon,adobe]
  return (
    <div className="container my-10 px-3 2xl:px-20 mx-auto">
        <div className=" bg-gradient-to-r from-purple-800 to-purple-950  rounded-xl text-white text-center py-[3.7rem] flex flex-col gap-y-8">
            <h1 className="text-[2.5rem] font-semibold">Over 10,000+ jobs to apply</h1>
            <p className="w-1/2 mx-auto text-[0.9rem]">Your Next Big Career Move Starts Right Here - Explore the Best Job Opportunities and Take the First Step Toward Your Future!</p>
            <div className=" flex items-center justify-between bg-white text-gray-400 rounded max-w-xl pl-4 p-1 mx-4 sm:mx-auto ">
              <div className="flex gap-2">
                <img src={search} alt="" />
                <input ref={setTitle} className='w-full text-[1rem] text-black outline-none rounded p-2' type="search" name="" id="" placeholder='Search for jobs'/>
              </div>
              <div className="flex gap-2">
                <img src={location} alt="" />
                <input ref={setLocation} className='w-full text-[1rem] text-black outline-none rounded p-2' type="search" name="" id="" placeholder='Location' />
                <button onClick={()=>onSearch()} className='px-7 py-2 bg-blue-600 text-[1rem] rounded text-white'>Search</button>
              </div>
            </div>
        </div>
        <div className=" border-zinc-300 shadow-xl rounded-xl border-2 p-4 mt-6 ">
          <h1 className='text-black  text-[1.5rem] font-medium'>Trusted By</h1>
          <div className="flex max-sm:mt-2 gap-x-14 gap-y-6 flex-wrap">
            {logos.map((value,index)=>
            <img key={index} className='w-20' src={value} alt="" />
            )}
          </div>
         
        </div>
    </div>
  )
}

export default Hero