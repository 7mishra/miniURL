
import './home.css';
import MinURL from "./minURL";
import MaxUrl from "./maxUrl";
import ControlPannel from "./controlPannel";

function Home() {
    let mode=0
    return (
        <div className="HomeApp">
            <div className="displayWrapper">
                <div className="display">
                    <div className="container">
                        <ControlPannel/>
                    </div>
                    <div className="container">
                        {mode?<MaxUrl />:<MinURL/>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

/*

192734
22303c
ffffff
8899a6

*/