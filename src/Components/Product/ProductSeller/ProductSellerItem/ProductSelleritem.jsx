import React from 'react'

import Aux from './../../../HOC/Aux/Auxil'

import styles from './ProductSellerItem.module.styl'

const ProductSellerItem = React.memo(props=>{
    return(
        <Aux className={styles.bodyProductSellerItem}>
            <Aux className={styles.bodyProdSellerPrice}>
                <p>$0.00</p>
                <Aux className={styles.bodyProdSellerTitle}>
                    <strong>vendedor: </strong>
                    <p>Anonimo</p>
                </Aux>
            </Aux>
            <Aux className={styles.bodyProdSellerCart}>
                <p>Añadir al carrito</p>
            </Aux>
        </Aux>
    )
})
export default ProductSellerItem