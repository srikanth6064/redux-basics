import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fecthUser } from './../actions/userAction'

class Table extends Component {
    componentDidMount() {
        this.props.fetchUser()
    }
    render() {
        const { crd } = this.props
        console.log(crd)
        return (
            <React.Fragment>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>username</th>
                            <th>email</th>
                            <th>address</th>
                        </tr>
                  </thead>
                  <tbody>
                    {
                      crd &&  crd.map((v,ind)=>(
                        <tr key={v.id}>
                           <td>{v.id}</td>
                           <td>{v.name}</td>
                           <td>{v.username}</td>
                           <td>{v.email}</td>
                           <td>{v.address.zipcode}</td>
                          
                        </tr>
                      ))  
                    }  
                  </tbody>
                </table>

            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    crd: state.user.data
})

const mapDisPatchToProps = (dispatch) => ({
    fetchUser: () => dispatch(fecthUser())
})
export default connect(mapStateToProps, mapDisPatchToProps)(Table)
