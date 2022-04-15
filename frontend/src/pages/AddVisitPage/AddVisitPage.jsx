import React from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";

let initialValues = {
    patient: "",
    provider: "",
    date: "",
    was_attended: "",
    makeup_needed: "",
};

const AddVisitPage = (props) => {
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewVisit)

    async function postNewVisit(){
        let response = await axios.post("http://127.0.0.1:8000/api/visits/", {headers: {Authorization: 'Bearer ' + token}});
        console.log(response.data)

        
    }

    // function createVisit(visitData){
    //     let 
    // }

    return(
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
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
                    Date:{" "}
                    <input
                        type="text"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Time:{" "}
                    <input
                        type="text"
                        name="time"
                        value={formData.time}
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
                <button>Add Visit</button>
            </form>
        </div>
    )
};

export default AddVisitPage