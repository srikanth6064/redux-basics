import React, { Component } from 'react'
import {connect} from  'react-redux'
import {increment,decrement} from './../actions/userAction'

 class Count extends Component {
    handleClick = ()=>{
        this.props.increment()
    }
    handleClick1 = ()=>{
        this.props.decrement()
    }
    
    render() {
        const {count}=this.props
        return (
           <React.Fragment>
              <p>{count}</p>
         <button type="button" onClick={this.handleClick}>increment</button>
         <button type="button" onClick={this.handleClick1}>decrement</button>
        </React.Fragment>
        )
    }
}
const mapStateToProps = (state)=>({
    count:state.counter.count
})

const mapDispatchToProps = (dispatch)=>({
    increment:()=>dispatch(increment()),
    decrement:()=>dispatch(decrement())
})

export default connect(mapStateToProps,mapDispatchToProps) (Count)
