import React from 'react'
import Aux from '../../HOC/Aux/Auxil'

import ProductRelatedItem from './ProductRelatedItem/ProductRelatedItem'

import styles from './ProductRelated.module.styl'

const ProductRelated = React.memo(props=>{
    return(
        <Aux className={styles.body}>
            <strong className={styles.title}>Productos relacionados</strong>
            <Aux className={styles.bodyProductRelated}>
                <ProductRelatedItem />
                <ProductRelatedItem />
                <ProductRelatedItem />
                <ProductRelatedItem />
                <ProductRelatedItem />
                <ProductRelatedItem />
            </Aux>
        </Aux>
    )
})
export default ProductRelated