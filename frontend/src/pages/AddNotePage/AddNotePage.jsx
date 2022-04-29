import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";

let initialValues = {
    // patient: "",
    // provider: "",
    // visit: "",
    note: "",
};

const AddNotePage = (props) => {
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const {patientId} = useParams();
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewNote)

    async function postNewNote(){
        try {
            let response = await axios.post(`http://127.0.0.1:8000/api/notes/getnote/${patientId}/`, formData, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            navigate("/")
        } catch (error) {
            console.log(error.message)
        }
    }

    return(
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                {/* <label>
                    Patient:{" "}
                    <input
                        type="text"
                        name="patient_id"
                        value={patientId.patient_id}
                        onChange={handleInputChange}
                    />
                </label> */}
                {/* <label>
                    Provider:{" "}
                    <input
                        type="text"
                        name="provider_id"
                        value={formData.provider_id}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Visit:{" "}
                    <input
                        type="text"
                        name="visit"
                        value={formData.visit}
                        onChange={handleInputChange}
                    />
                </label> */}
                <label>
                    Note:{" "}
                    <input
                        type="text"
                        name="note"
                        value={formData.note}
                        onChange={handleInputChange}
                    />
                </label>
                
                <button >Add Note</button>
            </form>
        </div>
    )
};

export default AddNotePage