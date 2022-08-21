import './minURL.css'
import {useEffect, useState} from "react";
import axios from "axios";

const maxURL='http://localhost:8000/getMaxUrl'

function MaxUrl(){

    const [isMax, setIsMax]=useState(false);
    const [minlink,setMiniLink]=useState('');
    const [maxLink,setMaxLink]=useState('');

    useEffect(() =>{
        if(isMax){
            axios.post(maxURL, {minlink}).then((res) => {
                setMaxLink(res.data);
                setIsMax(false)
            });
        }
    },[isMax])


    const handleMinSubmit = (event) => {
        event.preventDefault();
        setIsMax(true)
    }

    const handleChange = (event,type) => {
        event.persist();
        setMiniLink(event.target.value)
    }

    return(
        <div className={"urlWrapper"}>
            <form className="url" onSubmit={handleMinSubmit}>
                <div className={"minUrlHeader"}><span>Maximize Url</span></div>
                <div className="urlLink">
                    <div className="field">
                        <div className={"tag"}><span>minURL</span></div>
                        <div className={"link"}>
                            <input
                                type="text"
                                name='user'
                                value={minlink}
                                placeholder={"Please enter your link"}
                                onChange={ event => handleChange(event,'username')}
                            />
                        </div>
                    </div>
                </div>
                <div className="minimizeLinkBtn">
                    <div className={"submitLinkBtn"}>
                        <button type={"submit"} className={"linkbtn"}>Maximize</button>
                    </div>
                </div>
                <div className="minUrlLink">
                    <div className="field">
                        <div className={"tag"}><span>URL</span></div>
                        <div className={"link"}>
                            <input readOnly={true}
                                   contentEditable={"false"}
                                   type="text"
                                   name='user'
                                   value={maxLink}
                                   placeholder={"Minimized Link"}
                            />
                        </div>
                    </div>
                </div>
            </form>

        </div>
    )

}
export default MaxUrl