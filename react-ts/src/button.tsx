import React from 'react'
import './button.css'

interface IProps{
    size?: String
    onClick?:React.MouseEventHandler
}

// function Button(props: IProps) {
//     return <div className={`button ${props.size}`}>button</div>
// }

const Button: React.FunctionComponent<IProps> = function (props) {
    return <div className={`button ${props.size}`} onClick={props.onClick}>button</div>
}

export default Button