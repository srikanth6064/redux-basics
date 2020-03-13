import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './../components/home'
import Login from './../components/login '
import About from './../components/about'
import Count from './../containerCompoents/count'
import Table from './../containerCompoents/table'
import Login1 from './../containerCompoents/Login1'
import EmployeeListPage from '../containerCompoents/employeeListPage'

class Routing extends React.Component{
    render(){
        return(
          <React.Fragment>
          <Router>
             
               <Route exact={true} path='/' component={Home}/>
               <Route path='/home' component={Home} />
               <Route path='/login' component={Login} />
               <Route path='/about' component={About} />
               <Route path='/count' component={Count} />
               <Route path='/table' component={Table} />
               <Route path='/login1' component={Login1}/>
               <Route path='/employeeListPage' component={EmployeeListPage}></Route>
            
          
          </Router>
          
          </React.Fragment>
           
        )
    }
}
export default Routing