import React,{useState} from "react";

export default function StopLight(){
let [active, setActive] = useState("red");
return(
    <div>
        <div className="top"></div>
        <div className="traffic-light">
            <div>
                className={active === "red" ? "red light glow" : "red light" }
                onClick{() => setActive("red")}
            </div>
        </div>
    </div>)


}