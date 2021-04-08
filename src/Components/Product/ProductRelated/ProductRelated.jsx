import React from 'react'
import Aux from '../../HOC/Aux/Auxil'

import styles from './ProductRelated.module.styl'

const ProductRelated = React.memo(props=>{
    return(
        <Aux className={styles.body}>
            <strong className={styles.title}>Productos relacionados</strong>
        </Aux>
    )
})
export default ProductRelated