import userDetails from '../data/login.json';

const initialstate = {
    userName: userDetails.username,
    passWord: userDetails.password,
    auth: false,
    error: ""
};



const authreducer = (state = initialstate, action) => {
    switch(action.type){
        case "Login":
    console.log(action.payload.password)
            if((state.userName===action.payload.userName)&&(state.passWord===action.payload.password)){
                return{
                    ...state,
                    auth:true
                                                                                                                                              
                }

            }else{
               return{
                   ...state,
                   auth:false,
                   error:"please enter valid username and password"
               }

            }

            default:
            return state;     
            

    }
}

export default authreducer;