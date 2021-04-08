const mapDispatchToProps = dispatch => {
    return {
        
    }
}

const mapStateToProps = state => {
    return { 
        cart: state.cart,
        amount: state.cart.map((e)=> e.amount).reduce((a,b)=>a+b,0)
    }
}

export {mapDispatchToProps, mapStateToProps}