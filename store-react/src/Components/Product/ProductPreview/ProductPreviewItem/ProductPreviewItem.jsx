import React from 'react'

import Aux from '../../../HOC/Aux/Auxil'

import styles from './ProductPreviewItem.module.styl'

const ProductPreviewItem = React.memo(props=>{
    return(
        <Aux className={styles.body}>
            &nbsp;
        </Aux>
    )
})
export default ProductPreviewItem