import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context/AppContext"
import cross_icon from "../assets/cross_icon.svg"
import {assets, JobCategories} from "../assets/assets.js"
import {JobLocations} from "../assets/assets.js"
import JobCard from "./JobCard.jsx"
function JobList() {
  const {isSearched,searchFilter, setSearchFilter,jobs}= useContext(AppContext)
  const [showfilter, setShowFilter] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState([])
  const [selectedLocation, setSelectedLocation] = useState([])
  const [filterJobs, setFilterJobs] = useState(jobs)

  const handleChangesCategory = (category)=>{
     setSelectedCategory(prev => prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category])
  }
  
  const handleChangesLocation = (location)=>{
    setSelectedLocation(prev => prev.includes(location) ? prev.filter(c => c !== location) : [...prev, location])
  }
  useEffect(()=>{
        const matchesCategories = jobs => selectedCategory.length === 0 || selectedCategory.includes(jobs.category)
        const matchesLocation = jobs => selectedLocation.length === 0 || selectedLocation.includes(jobs.location)
        const matchesTitle = jobs => searchFilter.title === "" || jobs.title.toLowerCase().includes(searchFilter.title.toLowerCase())
        const matchesSearchLocation = jobs => searchFilter.location === "" || jobs.location.toLowerCase().includes(searchFilter.location.toLowerCase())
        const newFilterJobs = jobs.slice().reverse().filter(
         job =>  matchesCategories(job) && matchesLocation(job) && matchesTitle(job) && matchesSearchLocation(job)
        )
        setFilterJobs(newFilterJobs)
        setCurrentPage(1)
  },[jobs,selectedCategory,selectedLocation,searchFilter])
  return (
    <div className="container mx-auto flex max-sm:flex-col">
      {/* Sidebar  */}
      <div className="max-sm:ml-4 sm:w-1/4 ">
        {/* Search Filter */}
        {
          // Conditional rendering based on searchFilter
          isSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
            <div className=" flex flex-col gap-y-2">
              <h3 className="text-xl font-semibold py-2">Current Search</h3>
              {searchFilter.title && ( 
                <span className="w-fit px-5 py-[0.4rem] border-[1px] border-blue-300 bg-blue-100 rounded-md ">
                  {searchFilter.title}
                  <img onClick={() =>setSearchFilter(prev =>({...prev , title :""})) } className="cursor-pointer inline-block ml-3" src={cross_icon} alt="" />
                </span>
              )}
              {searchFilter.location && ( 
                <span className=" w-fit px-5 py-[0.4rem]  border-[1px] border-red-200 bg-red-50 rounded-md ">
                  {searchFilter.location}
                  <img  onClick={() =>setSearchFilter(prev =>({...prev , location :""})) } className=" cursor-pointer inline-block ml-3" src={cross_icon} alt="" />
                </span>
              )}
            </div>
          )
        }
        {/* Show Filter */}
        <button onClick={()=>setShowFilter(prev=> !prev)} className="sm:hidden mt-3 px-6 py-1.5 rounded border border-gray-400 lh:">
          { showfilter ? "Hide" : "Show" }
        </button>
        {/* Search by Categories  */}
        <div className={showfilter ? "" : "max-lg:hidden"}>
          <h3 className="text-xl font-semibold py-2">Search by Categories</h3>
          {/* Categories */}
          {/* Add your categories here */}
          <ul className="flex flex-col gap-3">
           { JobCategories.map((category,index)=>
            <li key={index} className="flex gap-3 items-center text-[1.1rem] text-zinc-600" >
              <input onChange={()=>handleChangesCategory(category)} checked={selectedCategory.includes(category)} className="w-4" type="checkbox" id="" name="" />
              {category}
            </li>
           )}
           </ul>
        </div>
        {/* Search by Locations  */}
        <div className={showfilter ? "" : "max-lg:hidden mt-4"}>
          <h3 className="text-xl font-semibold py-2">Search by Locations</h3>
          {/* Categories */}
          {/* Add your categories here */}
          <ul className="flex flex-col gap-3">
           { JobLocations.map((location,index)=>
            <li key={index} className="flex gap-3 items-center text-[1.1rem] text-zinc-600" >
              <input onChange={()=>handleChangesLocation(location)} checked={selectedLocation.includes(location)} className="w-4" type="checkbox" id="" name="" />
              {location}
            </li>
           )}
           </ul>
        </div>
      </div>
      {/* Job List */}
      <div className="w-screen sm:w-3/4">
        <h1 className="max-sm:m-4 text-3xl font-semibold" id="job-list">Latest Jobs</h1>
        <p className="max-sm:ml-4">Get your desired from top companies</p>
        <div className="max-sm:w-4/5 grid grid-cols-1 max-sm: mx-auto max-lg:pr-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 mt-5">
        {
          filterJobs.slice((currentPage-1)*6,(currentPage)*6).map((job, index)=>
          <JobCard key={index} job={job} />
        )}
        </div>
        {/* Pagination */}
        {
          filterJobs.length > 6 && (
            <div className="flex  items-center justify-center space-x-4 mt-10">
              <a href="#job-list">
                 <img  onClick={()=> setCurrentPage(Math.max(currentPage-1,1))} src={assets.left_arrow_icon} alt="" />
              </a>
              {Array.from({length:Math.ceil(filterJobs.length/6)}).map((__, index)=>
                   <a key={index} href="#job-list">
                      <button onClick={()=>setCurrentPage(index+1)} className={`w-10 h-10 flex justify-center items-center border border-gray-300 rounded ${currentPage === index+1 ? 'bg-blue-100 text-blue-500' : 'text-gray-500'}`}>{index +1}</button>
                   </a>
               )}
               <a href="#job-list">
                 <img onClick={()=>setCurrentPage(Math.min(currentPage+1,Math.ceil(jobs.length/6)))} src={assets.right_arrow_icon} alt="" />
               </a>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default JobList;