const Login=(data)=>dispatch=>{
    dispatch({
        type:"Login",
        payload:data
    })
}

export default Login