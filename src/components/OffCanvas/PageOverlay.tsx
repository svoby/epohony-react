import React from "react";
import { OffCanvasPropType } from "../../global.types";

const PageOverlay = ({ shown, togglerHandler } : OffCanvasPropType) => {
    return <div className={`mobile-nav-overlay fullscreen ${shown ? 'show' : ''}`} onClick={togglerHandler}></div>
}

export default PageOverlay