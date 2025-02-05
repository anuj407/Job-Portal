
import { useContext, useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import { AppContext } from "../context/AppContext"
import Navbar from "../components/Navbar"
import { assets } from "../assets/assets";
import kConvert from "k-convert";
import Footer from "../components/Footer"
import JobCard from "../components/JobCard";
function ApplyJob() {
  const {id} = useParams()
  const [JobData, setJobData]= useState(null)
  const {jobs} = useContext(AppContext)
  const fetchJobData = async ()=>{
     const data = jobs.filter(job => job._id === id)
     setJobData(data[0])
  }
  useEffect(()=>{
    fetchJobData()
  })
  return (
    <div>
        <Navbar/>
        <div className="max-w-screen-xl mx-auto mt-10 h-[18rem] border-[1px] border-[#81d7ff] bg-[#F0F9FF] rounded-md flex items-center justify-center gap-x-3 pl-4">
          <div className="w-[6rem] h-[6rem] rounded-md border flex justify-center items-center bg-white">
            <img className="w-[4rem]" src={JobData?.companyId.image} alt="" />
          </div>
          <div className="w-2/3 h-[6rem] flex flex-col justify-evenly">
            <h1 className="text-[2rem] leading-none font-bold">{JobData?.title}</h1>
            <div className="flex gap-4">
              <span className="flex items-center gap-1"><img className="w-4" src={assets.suitcase_icon} alt="" /> {JobData?.companyId.name} </span>
              <span className="flex items-center gap-1"><img src={assets.location_icon} alt="" />{JobData?.location}</span>
              <span className="flex items-center gap-1"><img src={assets.person_icon} alt="" />{JobData?.companyId.email}</span>
              <span className="flex items-center gap-1"><img src={assets.money_icon} alt="" /> CTC : {kConvert.convertTo(JobData?.salary)}</span>
            </div>
          </div>
          <div className="w-1/6">
            <button className="px-10 py-2 bg-blue-600 text-white rounded-md">Apply Job</button>
            <p>Posted 3 months ago</p>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto flex gap-10 my-12">
          <div className="w-2/3 flex flex-col gap-5">
            <h1 className="font-bold text-xl">Job Description</h1>
            <div className="rich-text" dangerouslySetInnerHTML={{__html:JobData?.description}}></div>
            <button className="w-fit px-10 py-2 bg-blue-600 text-white rounded-md">Apply Job</button>
          </div>
          <div className="">
            <h4 className="font-medium">More Jobs from {JobData?.companyId.name}</h4>
            <div className=" flex flex-col my-2 gap-3">
              {
                jobs?.filter(job => job?.companyId.name === JobData?.companyId.name).map((job,index )=> 
                  <JobCard key={index} job={job}/>)                    
              }
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ApplyJob 