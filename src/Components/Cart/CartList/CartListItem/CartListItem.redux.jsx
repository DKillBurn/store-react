const mapDispatchToProps = dispatch => {
    return {
        onAddProduct: (val)=> dispatch({type: 'ADDPRODUCT', value:val}),
        onRemoveProduct: (val)=> dispatch({type: 'REMOVEPRODUCT', value:val}),
        onDeleteCart: (val)=> dispatch({type: 'REMOVETOCART', value:val})
    }
}

const mapStateToProps = state => {
    return { }
}

export {mapDispatchToProps, mapStateToProps}


    