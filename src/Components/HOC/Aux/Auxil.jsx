import React from 'react'

const Aux = React.memo(props=>{
    return(
        <div {...props}>
            {props.children}
        </div>
    )
})
export default Aux
