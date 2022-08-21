import './useMinLink.css'
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
const baseURL="http://localhost:8000"
const minURL='http://localhost:8000/getMinUrl'
function UseMinLink(){
    let currLocation=useLocation().pathname;
    const [navTo,setNavTo]=useState("");
    let navigate = useNavigate();
    useEffect(() =>{
        let data=baseURL+currLocation;
        console.log(data);
        axios.post(baseURL+(currLocation.toString()), {}).then((res) => {
            console.log(res.data)
            setNavTo(res.data)
            window.open(res.data, '_blank').focus();
            // navigate(res.data, { replace: true });
        });
    });
    return(
        navTo!==""?<div className={"linkReady"}><span className={"linkTxt"}>Your Link is ready. Please click the link to navigate to <a href={navTo} className={"linkAdds"}>{navTo}</a></span></div>
            :
            <div className={"loader"}>
            <div className="spinner">
                <div className="dot1"/>
                <div className="dot2"/>
            </div>
            <div><span>Loading...</span></div>
        </div>
    )
}
export default UseMinLink