
import { useContext, useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import { AppContext } from "../context/AppContext"
import Navbar from "../components/Navbar"
import { assets } from "../assets/assets";
import kConvert from "k-convert";
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
        <div className="max-w-screen-xl mx-auto mt-10 h-[18rem] border-2 border-[#9CDEFC] bg-[#F0F9FF] rounded-md flex items-center justify-center gap-x-3 pl-4">
          <div className="w-[6rem] h-[6rem] rounded-md border flex justify-center items-center bg-white">
            <img className="w-[4rem]" src={JobData?.companyId.image} alt="" />
          </div>
          <div className="w-2/3 h-[6rem] flex flex-col justify-evenly">
            <h1 className="text-[2rem] leading-none font-bold">{JobData?.title}</h1>
            <div className="flex gap-3">
              <span className="flex items-center gap-1"><img className="w-4" src={assets.suitcase_icon} alt="" /> {JobData?.companyId.name} </span>
              <span className="flex items-center gap-1"><img src={assets.location_icon} alt="" />{JobData?.location}</span>
              <span className="flex items-center gap-1"><img src={assets.person_icon} alt="" />{JobData?.companyId.email}</span>
              <span className="flex items-center gap-1"><img src={assets.money_icon} alt="" /> CTC : {kConvert.convertTo(JobData?.salary)}</span>
            </div>
          </div>
          <div className="w-1/6">
            <button className="px-10 py-2 bg-blue-600 text-white rounded-xl">Apply Job</button>
            <p>Posted 3 months ago</p>
          </div>
        </div>
    </div>
  )
}

export default ApplyJob 