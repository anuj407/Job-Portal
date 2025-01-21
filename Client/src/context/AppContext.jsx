/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext()

export const AppContextProvider = (props) =>{
    const [ searchFilter, setSearchFilter ] = useState({
        title:'',
        location:''
    })
    const [isSearched, setIsSearched] = useState(false)
    const [jobs, setJobs] = useState([])
    //Functions to fetch jobsData
    const fetchJobsData = async () => {
        try {
            setJobs(jobsData)
        } catch (error) {
            console.error('Error fetching jobs:', error)
        }
    }
    useEffect(
        () => {
            fetchJobsData()
        }, []
    )
    const value ={
        searchFilter,
        setSearchFilter,
        isSearched,
        setIsSearched,
        jobs,
        setJobs
    }
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}