import React from 'react'

export default function Alert(props) {

    // function to capitalise first alphabet of your word 
    const capitalize = ( word )=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <div style={{height:"50px"}}>
        {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
            <strong>{props.alert.msg}</strong>
        </div>}
        </div>

    )
}

