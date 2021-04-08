const initialState = {
    username: null,
    cart:[],
    alert:null
}

const reducer = (state = initialState, action) =>{
    const newState = Object.assign({}, state)
    switch(action.type){
        case "USERLOGGED": newState.username = action.value; return newState
        case "USERLOGOUT": newState.username = null; return newState
        case "ADDTOCART": newState.cart = action.value; return newState
        case "REMOVETOCART": 
            const tmpDeleteCart = newState.cart.filter((e)=> e.id !== action.value);
            newState.cart = tmpDeleteCart
            return newState
        case "ADDPRODUCT": 
            const tmpAddCart = newState.cart.map((e)=> {
                if(e.id === action.value){
                    ++e.amount
                }
                return e
            });
            newState.cart = tmpAddCart
            return newState 
        case "REMOVEPRODUCT": 
            const tmpRemoveCart = newState.cart.map((e)=>{
            if(e.id === action.value){
                --e.amount     
            }
            return e
        }); 
        newState.cart = tmpRemoveCart
        return newState
        case "SENTALERT": newState.alert = action.value; return newState
        default: return state
    }
}

export default reducer