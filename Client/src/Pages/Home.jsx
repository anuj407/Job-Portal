import Hero from "../components/Hero"
import JobList from "../components/JobList"
import Navbar from "../components/navbar"
export default function Home() {
  return (
    <div>
        <Navbar/>    
        <Hero/>
        <JobList/>
    </div>
  )
}
