import React from "react";
import { useNavigate} from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";

import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";



const AddVisitPage = (props) => {
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [initialValues] = {patient: '', provider: '', start: '', end: '', was_attended: '', makeup_needed: ''};
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewVisit)
    const [newVisit, setNewVisit] = useState('')

    useEffect(()=>{
        addNewVisit(newVisit)
    }, []);

    async function postNewVisit(){
        let response = await axios.post("http://127.0.0.1:8000/api/visits/", {headers: {Authorization: 'Bearer ' + token}});
        console.log(response.data)
        setNewVisit(response.data)
    }

    function addNewVisit(newVisit){
        setNewVisit(newVisit)
        postNewVisit()
    }

    const handleClick = (event, newVisit) => {
        event.preventDefault();
        postNewVisit(newVisit)
        
    }

    return(
        <div className="container">
            <form className={newVisit} onSubmit={handleSubmit}>
                <label>
                    Patient:{" "}
                    <input
                        type="text"
                        name="patient"
                        value={formData.patient}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Provider:{" "}
                    <input
                        type="text"
                        name="provider"
                        value={formData.provider}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Start:{" "}
                    <input
                        type="text"
                        name="start"
                        value={formData.start}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    End:{" "}
                    <input
                        type="text"
                        name="end"
                        value={formData.end}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    WasAttended:{" "}
                    <input
                        type="text"
                        name="was_attended"
                        value={formData.was_attended}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    MakeupNeeded:{" "}
                    <input
                        type="text"
                        name="makeup_needed"
                        value={formData.makeup_needed}
                        onChange={handleInputChange}
                    />
                </label>
                <button onClick={handleClick}>Add Visit</button>
            </form>
        </div>
    )
};

export default AddVisitPage