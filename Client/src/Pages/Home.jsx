import AppDownload from "../components/AppDownload"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import JobList from "../components/JobList"
import Navbar from "../components/Navbar"
export default function Home() {
  return (
    <div>
        <Navbar/>    
        <Hero/>
        <JobList/>
        <AppDownload/>
        <Footer/>
    </div>
  )
}
