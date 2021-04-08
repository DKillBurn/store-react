const mapDispatchToProps = dispatch => {
    return {
        onAddToCart: (val)=> dispatch({type: 'ADDTOCART', value:val})
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export {mapDispatchToProps, mapStateToProps}