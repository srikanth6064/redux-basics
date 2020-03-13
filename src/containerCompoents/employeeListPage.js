import React, { Component } from "react";
import { connect } from "react-redux";
import getListOfEmployees from "../actions/employeeList";

class EmployeeDetails extends React.Component {
    componentDidMount(){
        this.props.employee()
    }
    render() {
        const{crd}=this.props;
        return (
            <div>
            <h1 align="center" style={{color:"red"}} className="header_message">Employee List</h1>
                 <table align="center" className="table table-bordered">
                   <thead>
                     <th>Id</th>
                     <th>Name</th>
                     <th>Gender</th>
                     <th>Email</th>
                     <th>Ph.no</th>
                   </thead>
                   <tbody>
                    {
                        crd.user.map((v,k)=>{
                            return(
                          <tr>
                            <td>{v.id}</td>
                            <td>{v.name}</td>
                            <td>{v.gender}</td>
                            <td>{v.email}</td>
                            <td>{v.phoneNo}</td>
                            </tr>
                            )
                        })
                    }
                   </tbody>
                 </table>
            </div>
        )
    }
}

const receive = (state) => ({
    crd : state.employee.employeeList
})

const send = (dispatch) => ({
    employee: () => dispatch(getListOfEmployees())
})

export default connect(receive,send)(EmployeeDetails) 