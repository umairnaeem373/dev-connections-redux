export const all_Users=(state={users:[]},action)=>{
    switch (action.type) {
        case 'REQUEST_ALL_USERS':
            return {...state,loading:true}

        case 'GET_ALL_USERS':
            return {...state,loading:false,users:action.payload}

        case 'REQUEST_ALL_FAILED':
            return {...state,loading:false}

        case 'ADD_NEW_USER':
            return{...state , users:[...state.users,action.payload]}
        
        case 'DELETE_USER':
            return{...state , users:state.users.filter(ele=>ele.id !== action.payload) }
        default:
            return state;
    }
}

export const singleUser =(state={}, action)=> {
    switch (action.type) {
        case 'FETCH_USER':
            return { ...state, loading: true };
        
        case 'GET_USER':
            return {...state,loadig:false,user:action.payload}

        default:
            return state
    }
}