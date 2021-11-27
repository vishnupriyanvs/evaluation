import {Link} from "react-router-dom"
function Travel(props){
    return(<>
        <h4>{props.details.employee_id}</h4>
        <div id="buttonsright">
                <button style={{width:'100px'}}><Link style={{color:'white',textDecoration:'none'}} to={`/requestdetails/${props.details.id}`}>View Details</Link></button>
                <button><Link to={`/staffdelete/${props.details.id}`} style={{color:'white',textDecoration:'none'}}>Delete</Link></button>
        </div>
    </>)
}
export default Travel;