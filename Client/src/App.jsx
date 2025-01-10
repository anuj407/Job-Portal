import { Route, Routes,  } from "react-router-dom"
import Home from "./Pages/Home.jsx"
import ApplyJob from "./Pages/ApplyJob.jsx"
import Applications from "./Pages/Applications.jsx"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-job/:id" element={<ApplyJob/>} />
        <Route path="/applications" element={<Applications />} />         
      </Routes>
    </div>
  )
}

export default App 