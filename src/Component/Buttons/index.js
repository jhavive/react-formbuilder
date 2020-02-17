import React from 'react'
import './styles.scss'

export const Button = (props) => (
    <button className={`custom-button ${props.style_type}`} {...props}>{props.children}</button>
)