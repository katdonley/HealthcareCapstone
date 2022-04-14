import React from "react";


const ViewPatientsPage = (props) =>{


   const handleClick = (event, id, [provider_id], first_name, last_name, age, sex, guardian_name, guardian_relationship, primary_number, address, diagnoses, needs_pt, needs_bt, needs_st, needs_ot, recertification_date, summary_of_care_notes, visits) => {
   event.preventDefault();
   props.setCurrentPatientId(id);
   props.setCurrentPatientProviders([provider_id]);
   props.setCurrentPatientFirstName(first_name);
   props.setCurrentPatientLastName(last_name);
   props.setCurrentPatientAge(age);
   props.setCurrentPatientSex(sex);
   props.setCurrentPatientGuardianName(guardian_name);
   props.setCurrentPatientGuardianRelationship(guardian_relationship);
   props.setCurrentPatientPrimaryNumber(primary_number);
   props.setCurrentPatientAddress(address);
   props.setCurrentPatientDiagnoses(diagnoses);
   props.setCurrentPatientNeedsPt(needs_pt);
   props.setCurrentPatientNeedsBt(needs_bt);
   props.setCurrentPatientNeedsSt(needs_st);
   props.setCurrentPatientNeedsOt(needs_ot);
   props.setCurrentPatientRecertificationDate(recertification_date);
   props.setCurrentPatientSummaryOfCareNotes(summary_of_care_notes);
   props.setCurrentPatientVisits(visits);
   console.log(id, [provider_id], first_name, last_name, age, sex, guardian_name, guardian_relationship, primary_number, address, diagnoses, needs_pt, needs_bt, needs_st, needs_ot, recertification_date, summary_of_care_notes, visits)
   }

    return (
    <div>
        <div className="container">
            <h1>List of Patients</h1>
            
        </div>
        <div>   
            <table> 
                <tbody>
                {patientList.length > 0 && props.patientList.map((patient, index) => {
                    return(
                        
                        <tr key={index}>
                            <td>{patient.id}</td>
                            <td>{patient.provider_id}</td>
                            <td>{patient.first_name}</td>
                            <td>{patient.last_name}</td>
                            <td>{patient.age}</td>
                            <td>{patient.sex}</td>
                            <td>{patient.guardian_name}</td>
                            <td>{patient.guardian_relationship}</td>
                            <td>{patient.primary_number}</td>
                            <td>{patient.address}</td>
                            <td>{patient.diagnoses}</td>
                            <td>{patient.needs_pt}</td>
                            <td>{patient.needs_bt}</td>
                            <td>{patient.needs_st}</td>
                            <td>{patient.needs_ot}</td>
                            <td>{patient.recertification_date}</td>
                            <td>{patient.summary_of_care_notes}</td>
                            <td>{patient.visits}</td>

                            <input  
                            onClick={(event) => handleClick(event, patient.id, patient.provider_id, patient.first_name, patient.last_name, patient.age, patient.sex, patient.guardian_name, patient.guardian_relationship, patient.primary_number, patient.address, patient.diagnoses, patient.needs_pt, patient.needs_bt, patient.needs_st, patient.needs_ot, patient.recertification_date, patient.summary_of_care_notes, patient.visits)}
                            />
                        </tr>
                    )
                })}
                </tbody>
            </table>

        </div>
    </div>
    );
};
    
export default ViewPatientsPage