import { useState } from "react";
import './Main.css'
import axios from 'axios'
//import { useParams } from "react-router-dom";
//import { useNavigate } from "react-router-dom"
function Register() {
    //const { id } = useParams()
    return (<div>
        <h1>Please Register</h1>
        <MyForm />


    </div>);
}
function MyForm(props) {
    //const navigate = useNavigate();
    //initialize useState with emtpy {} and it will return 2 values,
    //The current state, and a function that updates the state.
    const [inputs, setInputs] = useState({});
    function handleChange(event) {
        //during change of every element.
        //save name in 'name' and its value in value
        const name = event.target.name;
        const value = event.target.value;
        // setInputs is the function that updates the state.
        setInputs(values => ({ ...values, [name]: value }))
    }


    function handleSubmit(event) {
        //localStorage.clear();
        event.preventDefault();

        console.log(inputs);

        axios
            .post(`http://localhost:3002/register/`, inputs)
            .then(response => {
                //console.log('login promise was fullfilled')
                //console.log(response)
                // local storage setter
                localStorage.setItem('mytoken'
                    , response.data.accessToken);
                // local storage getter
                //console.log(localStorage.getItem('mytoken'));

                /*if (localStorage.getItem('mytoken') === 'undefined') {
                    localStorage.clear();
                    alert("Cannot Login. Please try again")
                } else {
                    navigate(`/stafflist`)
                }*/
                window.location = "/Login"
            })
            .catch(error => {
                localStorage.clear();
                //alert("got error with no data")
                if (error.response) {
                    alert(error.response.data); // => the response payload
                }
            })


    }
    return (<div id="main">

        <form onSubmit={handleSubmit}>
            <div>
                <label>Userid:</label>
                <input style={{ marginLeft: 83 }} type="text" name="email" value={inputs.email || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Password:</label>
                <input style={{ marginLeft: 60 }} type="password" name="password" value={inputs.password || ""} onChange={handleChange} required />
            </div>
            <button type="submit" >Register</button>
        </form>
    </div>);
}

export default Register;