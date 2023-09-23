import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const Api = createContext(null)
const ApiContext = ({children}) => {
    const BaseApi = "http://localhost:3000"

    
  const [selectedTaskForUpdate, setSelectedTaskForUpdate] = useState(null);
  const [updatedData, setUpdatedData] = useState("");

    const [tasks, setTasks] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        axios.get(`${BaseApi}/tasks`)
        .then(res => {
            setIsLoading(true)
            setTasks(res.data)
            setIsLoading(false)
            // console.log(res.data);
        })
    }, [])
    
    const handlePost = task =>{
        try {
            axios.post(`${BaseApi}/addTask`, task)
            .then(res => res )
        } catch (error) {
            console.log(error);
        }
    }

    const handleUpdate = task =>{
        try {
            axios.patch(`${BaseApi}/updateTask/${task._id}`, task)
            .then(res => res )
        } catch (error) {
            console.log(error);
        }
    }

    const handleDelete = task =>{
        try {
            axios.delete(`${BaseApi}/deleteTask/${task._id}`)
            .then(res => res )
        } catch (error) {
            console.log("Error While Delete Task",error);
        }
    }


    const api = {
        handlePost,
        handleUpdate,
        handleDelete,
        tasks,
        selectedTaskForUpdate,
        setSelectedTaskForUpdate,
        updatedData,
        setUpdatedData,
        isLoading
    }


    return (
        <Api.Provider value={api}>
            {children}
        </Api.Provider>
    );
};

export default ApiContext;