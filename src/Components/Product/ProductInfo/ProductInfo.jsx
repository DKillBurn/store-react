import React from 'react'
import CartAddition from '../../Cart/CartAddition/CartAddition'
import Rating from '../../Rating/Rating'

import Aux from '../../HOC/Aux/Auxil'

import styles from './ProductInfo.module.styl'

const ProductInfo = React.memo(props =>{
    return(
        <Aux className={styles.body}>
            <Aux className={styles.bodyTitleProduct}>
                <Aux>
                    <strong className={styles.titleProduct}>{props.product.title}</strong>
                </Aux>
                <Rating readOnly='true' rate={props.product.rating} />
            </Aux>
            <Aux className={styles.bodyPriceProduct}>
                <p className={styles.priceProduct}>
                    {'$'+props.product.price.toLocaleString('en-US',{ minimumFractionDigits: 2 })}
                </p>
            </Aux>
            <Aux className={styles.bodyDescriptionProduct}>
                <p className={styles.descriptionProduct}>
                    {props.product.description}
                </p>
            </Aux>
            <Aux className={styles.bodyCartProduct}>
                <CartAddition />
            </Aux>
        </Aux>
    )
})

export default ProductInfo