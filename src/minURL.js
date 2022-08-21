import './minURL.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const minURL='http://localhost:8000/getMinUrl'

function MinURL(){


    const [isMin, setIsMin]=useState(false);
    const [link,setLink]=useState('');
    const [minLink,setMinLink]=useState('');

    useEffect(() =>{
        if(isMin){
            axios.post(minURL, {link}).then((res) => {
                setMinLink(res.data);
                setIsMin(false)
            });
        }
    },[isMin])


    const handleMinSubmit = (event) => {
        event.preventDefault();
        setIsMin(true)
    }

    const handleChange = (event,type) => {
        event.persist();
        setLink(event.target.value)
    }

    return(
        <div className={"urlWrapper"}>
            <div className="url">
            <form className="urlForm" onSubmit={handleMinSubmit}>
                <div className={"minUrlHeader"}><span>Minimize Url</span></div>
                <div className="urlLink">
                    <div className="field">
                        <div className={"tag"}><span>URL</span></div>
                        <div className={"link"}>
                            <input
                                type="text"
                                name='user'
                                value={link}
                                placeholder={"Please enter your link"}
                                onChange={ event => handleChange(event,'username')}
                            />
                        </div>
                    </div>
                </div>
                <div className="minimizeLinkBtn">
                    <div className={"submitLinkBtn"}>
                        <button type={"submit"} className={"linkbtn"}>Minimize</button>
                    </div>
                </div>
                <div className="minUrlLink">
                    <div className="field">
                        <div className={"tag"}><span>minURL</span></div>
                        <div className={"link"}>
                            <input readOnly={true}
                                contentEditable={"false"}
                                type="text"
                                name='user'
                                value={minLink}
                                placeholder={"Minimized Link"}
                            />
                        </div>
                    </div>
                </div>
            </form>
                <div className={"helperButtons"}>
                    <div className={"hb"}>
                        <button   className={"helperbtn"}><span>Go to this page</span></button>
                    </div>
                    <div className={"hb"}>
                        <button className={"helperbtn"}><span>Copy URL</span></button>
                    </div>
                </div>
        </div>

        </div>
    )

}
export default MinURL