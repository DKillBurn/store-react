import React from 'react'

import Aux from './../../../HOC/Aux/Auxil'

import styles from './ProductRelatedItem.module.styl'

const ProductRelatedItem = React.memo(props=>{
    return(
        <Aux className={styles.bodyProductRelatedItem}>
            <Aux className={styles.bodyProdRelatedImage}>
                <img alt="" src="https://dummyimage.com/150x150/333333/FFFFFF.png" />
            </Aux>
            <Aux className={styles.bodyProdRelatedDesc}>
                <strong>Titulo</strong>
                <p>$0.00</p>
            </Aux>
        </Aux>
    )
})
export default ProductRelatedItem