import React, { Component } from 'react';
import { connect } from 'react-redux'
import Login from './../actions/auth'

class Login1 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userName:"",
       password:"",
       errorMessage:""
    }
  }
  handleClick = (e)=>{
    switch(e.target.id){
        case 'email':
            this.setState({
                ...this.state,
                userName:e.target.value,
                errorMessage:""
            })
            break;
         case 'password':
             this.setState({
                 ...this.State,
                 password:e.target.value,
                 errorMessage:""
             }) 
             break;
             default:
                 return this.state;  
    }
  }
  handleLogin = (event)=>{
      const {userName,password} = this.state
    event.preventDefault();
   if(userName&&password){
       const reg= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(reg.test(String(userName).toLowerCase())){
            this.props.login(this.state)
        }else{
            this.setState({
                 ...this.state,
                 errorMessage:"please enter valid email address" 
            })
        }
   }else{
       this.setState({
           ...this.state,
           errorMessage:"please enter username and password"
       })
   }

  }
  componentWillReceiveProps(nextProps) {
    this.setState({
        errorMessage: nextProps.error
    })
}
   
  
    render() {
        console.log(this.props)
        const{userName,password,errorMessage} = this.state;
        const { auth, history }=this.props
        console.log(auth)
        if (auth) {
            history.push("/employeeListPage");
        }
        
        return (
            <React.Fragment>
            <div >
                 <h1 className="text-center mt-5">Login Form</h1>
                 <p className="error-message">{errorMessage}</p>
                  <div className="row">
                 <div className="card col-md-4 mx-auto px-5">
                  <form>
                    <div className="form-group mt-5">
                     <label htmlFor="mail">UserName</label>
                     <input type="text"
                      className="form-control"
                      placeholder="username"
                      id="email"
                      autoComplete="on"
                      value={userName}
                      onChange={this.handleClick}
                     >
                     </input>

                     </div>
                     <div className="form-group">
                     <label htmlFor="password">password</label>
                     <input type="text"
                      className="form-control"
                      placeholder="password"
                      id="password"
                      autoComplete="off"
                      value={password}
                      onChange={this.handleClick}
                     >
                     
                     </input>
                     </div>
                     <button type="button" className="btn btn-primary btn-block my-5 " onClick={this.handleLogin}>Login</button>

                   
                  </form>
                 
                 </div>
                 </div>
              </div>   
              
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => ({
    auth:state.auth.auth,
    error:state.auth.error
})



const mapDispatchToProps = (dispatch) => ({
    login: (data) => dispatch(Login(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login1)
