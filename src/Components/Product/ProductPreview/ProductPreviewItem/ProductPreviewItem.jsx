import React from 'react'

import Aux from '../../../HOC/Aux/Auxil'

import styles from './ProductPreviewItem.module.styl'

const ProductPreviewItem = React.memo(props=>{
    return(
        <Aux className={styles.body}>
            <img alt='productDetail' title='detalleProducto' src="https://dummyimage.com/70x70/FFFFFF/333333.png" />
        </Aux>
    )
})
export default ProductPreviewItem