const balanceReducer = (state = 0, action) =>{
    switch(action.type){
        case 'SET_BALANCE': {
            return action.balance
        }
        default: return state
    }
}

export default balanceReducer