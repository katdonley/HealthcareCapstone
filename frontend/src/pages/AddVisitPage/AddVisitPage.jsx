import React from "react";
import { useNavigate, useParams} from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";

import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";

let initialValues = {
    // patient: "",
    // provider: "",
    start: "",
    end: ""
}

const AddVisitPage = (props) => {
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const {patientId} = useParams
    // const [initialValues] = {patient: '', provider: '', start: '', end: '', was_attended: '', makeup_needed: ''};
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewVisit)
    const [newVisit, setNewVisit] = useState('')

    useEffect(()=>{
        addNewVisit(newVisit)
    }, []);

    async function postNewVisit(){
        let response = await axios.put(`http://127.0.0.1:8000/api/visits/get/${patientId}/`, {headers: {Authorization: 'Bearer ' + token}});
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
                {/* <label>
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
                </label> */}
                <div>
                <label>
                    Start (Date:YYYY/MM/DD, Time: HH:MM:SS):{" "}
                    <input
                        type="text"
                        name="start"
                        value={formData.start}
                        onChange={handleInputChange}
                    />
                </label>
                </div>
                <div>
                <label>
                    End (Date:YYYY/MM/DD, Time: HH:MM:SS):{" "}
                    <input
                        type="text"
                        name="end"
                        value={formData.end}
                        onChange={handleInputChange}
                    />
                </label>
                </div>
                {/* <label>
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
                </label> */}
                <button onClick={handleClick}>Add Visit</button>
            </form>
        </div>
    )
};

export default AddVisitPage