import React from "react";
import { IOffCanvas } from "../../global.types";

const PageOverlay = ({ shown, togglerHandler }: IOffCanvas) => {
    return <div className={`mobile-nav-overlay fullscreen ${shown ? 'show' : ''}`} onClick={togglerHandler}></div>
}

export default PageOverlay