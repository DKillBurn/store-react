import React from 'react'
import Canister from '../../../../HOC/Canister/Canister'
import Aux from '../../../../HOC/Aux/Auxil'

import styles from './HeaderBottom.module.styl'
import { NavLink } from 'react-router-dom'

const HeaderBottom = React.memo(props=>{
    return(
        <Aux className={styles.body}>
            <Canister className={styles.container}>
                <strong>Categoria</strong>
                <strong>Pedidos</strong>
                <strong>Mas Comprados</strong>
                <strong>Promociones</strong>
                <strong>Modos de pago</strong>
            </Canister>
        </Aux>
    )
})
export default HeaderBottom