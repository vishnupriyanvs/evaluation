import axios from "axios";
import { useState, useEffect} from "react";
import Travel from "./Travel";
import './Staff.css'



function TravelList(){
    /*if(!localStorage.getItem('mytoken')){
        window.location = '/login'
    }*/
    //initialize the use case to empty
    const [staffs,setStaffs] = useState([])
    useEffect(()=>{
        console.log("use effect hook executed");
        axios
        .get('http://localhost:5000/travel')
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            setStaffs(response.data)
        })
        
        
    },[])

    return(<>
    <h1>Requist List</h1>
    <div id="unorder">
    <ul>
        {staffs.map(staff =>
            
            <li key ={staff.id}>
                <Travel details ={staff}/>
            </li>
            
        )}
    </ul>
    </div>
    
    </>
    );
}
export default TravelList;