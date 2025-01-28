/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import {assets} from "../assets/assets"
function JobCard({job}) {
 const navigate= useNavigate()

  return (
    <div className="w-[1/3] h-[19rem] px-5 py-4 border-2 border-zinc-300 rounded-md flex flex-col justify-evenly">
        <img className="w-8" src={assets.company_icon} alt="" />
        <h1 className="text-xl font-semibold ">{job.title}</h1>  
        <div className=" flex gap-3"> 
          <h4 className="bg-blue-100 px-3 py-1 text-sm rounded-md border-[1px] border-blue-300">{job.location}</h4>
          <h4 className="px-3 py-1 text-sm rounded-md bg-red-50 border-[1px] border-red-200">{job.level}</h4>
        </div>   
        <p className="text-zinc-700 text-sm " dangerouslySetInnerHTML={{__html :job.description.slice(0,150)}}></p>
        <div className=" flex gap-3">
            <button onClick={()=>{navigate(`/apply-job/${job._id}`); scrollTo(0,0)}} className="bg-blue-600 text-white px-3 py-1 rounded-md">Apply Now</button>
            <button onClick={()=>{navigate(`/apply-job/${job._id}`); scrollTo(0,0)}} className="text-gray-600 px-3 py-1 border-2 rounded-md">View Details</button>
        </div>
    </div>
  )
}

export default JobCard