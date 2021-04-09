import React from 'react'

import Aux from '../../HOC/Aux/Auxil'

import styles from './ProductSeller.module.styl'

import ProductSellerItem from './ProductSellerItem/ProductSelleritem'

const ProductSeller = React.memo(props =>{
    return(
        <Aux className={styles.body}>
            <strong className={styles.title}>Estos vendedores tambien lo tienen</strong>
            <Aux className={styles.bodyProductSeller}>
                <ProductSellerItem />
                <ProductSellerItem />
                <ProductSellerItem />
            </Aux>
        </Aux>
    )
})
export default ProductSeller