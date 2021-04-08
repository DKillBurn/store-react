import { Component } from 'react';

import Aux from '../../Components/HOC/Aux/Auxil'

import Crater from '../../Components/Crater/Crater'

import styles from './AccountPage.module.styl'

class AccountPage extends Component
{
    render()
    {
        return(
            <Aux className={styles.body}>
                <Aux className={styles.bodyTitle}>
                    <h3>Ajustes</h3>
                </Aux>
                <Aux className={styles.bodyContent}>
                    <Crater className={styles.bodyOption} custom='true' enableLabel='false' onClick={()=>{}}>
                        <picture>
                            <img className={styles.imageOption} src='' />
                        </picture>
                        <strong>Cambiar datos</strong>
                    </Crater>
                    <Crater className={styles.bodyOption} custom='true' enableLabel='false' onClick={()=>{}}>
                        <picture>
                            <img className={styles.imageOption} src='' />
                        </picture>
                        <strong>Mis pedidos</strong>
                    </Crater>
                    <Crater className={styles.bodyOption} custom='true' enableLabel='false' onClick={()=>{}}>
                        <picture>
                            <img className={styles.imageOption} src='' />
                        </picture>
                        <strong>Historial</strong>
                    </Crater>
                    <Crater className={styles.bodyOption} custom='true' enableLabel='false' onClick={()=>{}}>
                        <picture>
                            <img className={styles.imageOption} src='' />
                        </picture>
                        <strong>Direcciones</strong>
                    </Crater>
                </Aux>
            </Aux>
        )
    }
}
export default AccountPage