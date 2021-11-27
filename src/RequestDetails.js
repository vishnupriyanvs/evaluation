import { useState,useEffect } from "react";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import axios from "axios";


function RequestDetails(){
    /*if(!localStorage.getItem('mytoken')){
         window.location = '/login'
    }*/
        
    const [staff,setStaff] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()


    useEffect(()=>{
        console.log("use effect hook executed");
        
        axios
        .get(`http://localhost:5000/travel/${id}`,{params:{accessToken:localStorage.getItem('mytoken')}
         })
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            setStaff(response.data)
        })
        
    },[])

    return(<>
    <div > 
    <h1>Request Details</h1>
    <div id="secondary">
    <h3>Travel Cause: {staff.cause_travel}</h3>
    <h3>Source: {staff.source}</h3>
    <h3>Destination: {staff.destination}</h3>
    <h3>Mode : {staff.mode}</h3>
    <h3>From Date: {staff.from_date}</h3>
    <h3>To Date: {staff.to_date}</h3>
    <h3>Number of Days: {staff.no_days}</h3>
    <h3>Priority : {staff.priority}</h3>
    <h3>Product ID: {staff.product_id}</h3>
    <h3>Employee ID: {staff.employee_id}</h3>
    <h3>Status: {staff.status}</h3>
    </div>
    </div>
    <a href="/stafflist">Go back to staff list</a>

    <button type="button" onClick={()=>navigate(`/staffedit/${staff.id}`)}>Edit</button>
    <button type="button" onClick={()=>DeleteStaff(staff.id)}>Delete</button>
    </>
    );
}

function DeleteStaff(id){
    axios
        .delete(`http://localhost:3500/staff/${id}`)
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            
        })
        window.location='/StaffList'
}
export default RequestDetails;