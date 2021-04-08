import React from 'react'

import Aux from '../../HOC/Aux/Auxil'

import styles from './ProductSeller.module.styl'

const ProductSeller = React.memo(props =>{
    return(
        <Aux className={styles.body}>
            <strong className={styles.title}>Estos vendedores tambien lo tienen</strong>
            <Aux>

            </Aux>
        </Aux>
    )
})
export default ProductSeller