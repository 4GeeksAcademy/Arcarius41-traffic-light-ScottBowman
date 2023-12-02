import React, { useState } from "react";

export default function StopLight() {
    let [active, setActive] = useState("red");
    return (
        <div>
            <div className="top"></div>
            <div className="traffic-light">
                <div className={active === "red" ? "red light glow" : "red light"}
                    onClick={() => setActive("red")}>

                </div>
                <div className={active === "yellow" ? "yellow light glow" : "yellow light"}
                    onClick={() => setActive("yellow")}>

                </div>
                <div className={active === "green" ? "green light glow" : "green light"}
                    onClick={() => setActive("green")}>

                </div>
            </div>
        </div>);


}