import React from 'react'
import './ClearButton.css'
export function ClearButton(props) {
    return (
        <div className="clear-btn" onClick={props.handleClear}>
            {props.children}
        </div>
    )
}
