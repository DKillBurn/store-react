import React from 'react'

import Aux from '../../HOC/Aux/Auxil'
import CartListItem from './CartListItem/CartListItem'

import styles from './CartList.module.styl'

const CartList = React.memo(props=>{

    const cartList = props.products.length > 0
    ?props.products.map((e)=>{
        return(<CartListItem key={e.id} id={e.id} title={e.title} amount={e.amount}/>)
    })
    :(<Aux className={styles.bodyEmpty}><strong>Tu carrito esta vacio</strong></Aux>)

    return(
        <Aux className={styles.body}>
            {cartList}
        </Aux>
    )
})
export default CartList