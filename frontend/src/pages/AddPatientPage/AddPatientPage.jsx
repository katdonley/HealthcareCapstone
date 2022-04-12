import React from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";

let initialValues = {
    make: "",
    model: "",
    year: "",
};

const AddPatientPage = () => {
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewPatient)

    async function postNewPatient(){
        try {
            let response = await axios.post("http://127.0.0.1:8000/api/patients/", formData, {
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
                <label>
                    FirstName:{" "}
                    <input
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    LastName:{" "}
                    <input
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Age:{" "}
                    <input
                        type="text"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Sex:{" "}
                    <input
                        type="text"
                        name="sex"
                        value={formData.sex}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    GuardianName:{" "}
                    <input
                        type="text"
                        name="guardian_name"
                        value={formData.guardian_name}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    GuardianRelationship:{" "}
                    <input
                        type="text"
                        name="guardian_relationship"
                        value={formData.guardian_relationship}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    PrimaryNumber:{" "}
                    <input
                        type="text"
                        name="primary_number"
                        value={formData.primary_number}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Address:{" "}
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Diagnoses:{" "}
                    <input
                        type="text"
                        name="diagnoses"
                        value={formData.diagnoses}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    ServicesNeeded:{" "}
                    <input
                        type="text"
                        name="services_needed"
                        value={formData.services_needed}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    SummaryOfCareNotes:{" "}
                    <input
                        type="text"
                        name="summary_of_care_notes"
                        value={formData.summary_of_care_notes}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    UserId:{" "}
                    <input
                        type="text"
                        name="user_id"
                        value={formData.user_id}
                        onChange={handleInputChange}
                    />
                </label>
                <button>Add Patient</button>
            </form>
        </div>
    )
};

export default AddPatientPage