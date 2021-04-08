const mapDispatchToProps = dispatch => {
    return {
        onCartAdded: (val)=> dispatch({type: 'ADDTOCART', value:val}),
        onAlertSent: (val)=> dispatch({type: 'SENTALERT', value:val}),
    }
}

const mapStateToProps = state => {
    return { }
}

export {mapDispatchToProps, mapStateToProps}