/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import { AppContext } from "../context/AppContext"
import Navbar from "../components/Navbar"
import { PiBagBold } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { GiMoneyStack } from "react-icons/gi";

function ApplyJob() {
  const {id} = useParams()
  const [JobData, setJobData]= useState(null)
  const {jobs} = useContext(AppContext)
  const fetchJobData = async ()=>{
     const data =jobs.filter(job => job._id === id)
     setJobData(data[0])
  }
  console.log(JobData)
  useEffect(()=>{
    fetchJobData()
  },[id])
  return (
    <div>
        <Navbar/>
        <div className="max-w-screen-xl mx-auto mt-10 h-[18rem] border-2 border-[#9CDEFC] bg-[#F0F9FF] rounded-md">
          <div className="">
            <img src="" alt="" />
          </div>
          <div className="">
            <h1></h1>
            <div className="">
              <span><PiBagBold/></span>
              <span><IoLocationOutline/></span>
              <span><IoIosContact/></span>
              <span><GiMoneyStack/></span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ApplyJob 