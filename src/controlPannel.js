import './controlPannel.css'

function ControlPannel(){
    return (
        <div className={"controlPanel"}>
            <div className="panel">
                <div className="settings"><span>Settings</span></div>
                <div className={"cntrlField"}>
                    <div className="wrapper">
                        <input type="radio" name="select" id="option-1" checked />
                        <input type="radio" name="select" id="option-2" />
                        <label htmlFor="option-1" className="option option-1">
                            <div className="dot"> </div>
                            <span>Minimize Url</span>
                        </label>
                        <label htmlFor="option-2" className="option option-2">
                            <div className="dot"> </div>
                            <span>Original Url</span>
                        </label>
                    </div>
                </div>
                <div className={"cntrlField"}>
                    <div className="wrapper NM">
                        <span>Night Mode</span><span><input type="checkbox" className="toggle"/></span>
                    </div>
                </div>
                <div className={"cntrlField"}> </div>
            </div>
        </div>
    )
}
export default ControlPannel