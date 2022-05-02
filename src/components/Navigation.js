import React from "react";
import {Link} from "react-router-dom"
import "./Navigation.css"

function Navigation(){
    return(
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/">Best</Link>
            <Link to="/">Talk</Link>
        </div>
    )
}

export default Navigation;