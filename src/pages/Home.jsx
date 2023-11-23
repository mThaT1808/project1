import React from "react";
import image from "../images/1.jpg"

const Home = () => {
    return (
        <div className="Head">
        <h1>
            РЫБОВЫ
        </h1>
        <img src={image} alt="Не случилось Рыба"  style={{minWidth:'340px', maxWidth:'1920px'}}/>
        </div>
    )
}

export default Home;