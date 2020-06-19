import React from 'react'
import './button.css'

interface IProps{
    size:String
}
interface IState{
    n:number
}

class Atton extends React.Component<IProps, IState> {
    static defaultProps = {
        size:'normal'
    }

    onClick(e: React.MouseEvent) {
        console.log(e)
    }
    
    constructor(props:IProps) {
        super(props)
        console.log(props.size)
        this.state = {
            n:1
        }
    }
    render() {
        return <div className={`button`} onClick={this.onClick}>atton {this.state.n} {this.props.size}</div>
    }
}

export default Atton