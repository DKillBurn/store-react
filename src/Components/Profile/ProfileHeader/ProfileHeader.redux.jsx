const mapDispatchToProps = dispatch => {
    return {
        onUserLogged: ()=> dispatch({type: 'USERLOGGED', value:'username'}),
        onUserLogout: ()=> dispatch({type: 'USERLOGOUT'})
    }
}

const mapStateToProps = state => {
    return { 
        username: state.username,
        cart: state.cart.map((e)=> e.amount).reduce((a,b)=>a+b,0)
    }
}

export {mapDispatchToProps, mapStateToProps}