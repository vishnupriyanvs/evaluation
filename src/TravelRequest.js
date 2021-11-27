import { useState } from "react";
import './Main.css'
import axios from 'axios'
function TravelRequest() {
    return (<div>

        <MyForm />

    </div>);
}
function MyForm() {
    const[inputs,setInputs] = useState({})


    function handleChange(event){
        const name = event.target.name ;
        const value = event.target.value;

        setInputs(values =>({...values, [name]:value}))

    }

    function handleSubmit(event){
        event.preventDefault();

        console.log(inputs);

        axios
        .post('http://localhost:5000/travel',inputs)
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            window.location='/StaffList';
        })
    }
    return (<div id ="main">
        <h1>Travel Request Registration Form</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Travel Cause:</label>
                <input style={{marginLeft:83}}type="text" name="cause_travel" value={inputs.cause_travel || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Source :</label>
                <input style= {{marginLeft:60}} type="text" name="source"  value={inputs.source || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Destination :</label>
                <input type="text" name="destination"  value={inputs.destination || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Mode :</label>
                <input style={{marginLeft:49}} type="text" name="mode"  value={inputs.mode || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>From Date:</label>
                <input style={{marginLeft:50}} type="date" name="from_date"  value={inputs.from_date || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>To Date:</label>
                <input style={{marginLeft:50}} type="date" name="to_date"  value={inputs.to_date || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Number of Days:</label>
                <input style={{marginLeft:17}}type="number" name="no_days"  value={inputs.no_days || ""} onChange={handleChange}  required />
            </div>
            
            <div>
                <label>Priority :</label>
                <input style={{marginLeft:49}} type="text" name="priority"  value={inputs.priority || ""} onChange={handleChange} required />
            </div>

            <div>
                <label>Project ID :</label>
                <input style={{marginLeft:49}} type="text" name="project_id"  value={inputs.project_id || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Employee ID :</label>
                <input style={{marginLeft:49}} type="text" name="employee_id"  value={inputs.employee_id || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Status :</label>
                <input style={{marginLeft:49}} type="text" name="status"  value={inputs.status || ""} onChange={handleChange} required />
            </div>
            
                <button>Save</button>
                <button>Cancel</button>
            
            <button type="submit" >Register</button>
        </form>
    </div>);
}

export default TravelRequest;