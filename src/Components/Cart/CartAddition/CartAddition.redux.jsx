const mapDispatchToProps = dispatch => {
    return {
        onAddToCart: (val)=> dispatch({type: 'ADDTOCART', value:val}),
        onAlertSent: (val)=> dispatch({type: 'SENTALERT', value:val}),
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
     }
}

export {mapDispatchToProps, mapStateToProps}