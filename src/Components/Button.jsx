import React from 'react'
import './Button.css'
const isOperator = val =>{
    return !isNaN(val) || val === "." || val === "="
}
export function Button(props) {
    return (
        <div onClick= {() => props.handleClick(props.children)} className= {`button-wrapper ${isOperator(props.children) ? null : 'operator'}`} >
            {props.children}
        </div>
    )
}
