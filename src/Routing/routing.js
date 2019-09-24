import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './../components/home'
import Login from './../components/login '
import About from './../components/about'
import Count from './../containerCompoents/count'
import Table from './../containerCompoents/table'

class Routing extends React.Component{
    render(){
        return(
          <React.Fragment>
          <Router>
             <Switch>
               <Route exact={true} path='/' component={Home}/>
               <Route path='/home' component={Home} />
               <Route path='/login' component={Login} />
               <Route path='/about' component={About} />
               <Route path='/count' component={Count} />
               <Route path='/table' component={Table} />
             </Switch>
          
          </Router>
          
          </React.Fragment>
           
        )
    }
}
export default Routing