import React, { Component } from 'react'


 class Login  extends Component {

    handleDirect = ()=>{
        this.props.history.push('/home')
    }
    render() {
        console.log(this.props)
        return (
            <div>
               <h1>welcome to login page</h1> 
              <button type="button" onClick={this.handleDirect}>GotoHome</button>
            </div>
        )
    }
}

export default Login
