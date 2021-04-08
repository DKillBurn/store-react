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
                            <img className={styles.imageOption} alt='datos' src='https://dummyimage.com/160x160/333333/FFFFFF.png' />
                        </picture>
                        <strong>Cambiar datos</strong>
                    </Crater>
                    <Crater className={styles.bodyOption} custom='true' enableLabel='false' onClick={()=>{}}>
                        <picture>
                            <img className={styles.imageOption} alt='pedidos' src='https://dummyimage.com/160x160/333333/FFFFFF.png' />
                        </picture>
                        <strong>Mis pedidos</strong>
                    </Crater>
                    <Crater className={styles.bodyOption} custom='true' enableLabel='false' onClick={()=>{}}>
                        <picture>
                            <img className={styles.imageOption} alt='historial' src='https://dummyimage.com/160x160/333333/FFFFFF.png' />
                        </picture>
                        <strong>Historial</strong>
                    </Crater>
                    <Crater className={styles.bodyOption} custom='true' enableLabel='false' onClick={()=>{}}>
                        <picture>
                            <img className={styles.imageOption} alt='direccion' src='https://dummyimage.com/160x160/333333/FFFFFF.png' />
                        </picture>
                        <strong>Direcciones</strong>
                    </Crater>
                </Aux>
            </Aux>
        )
    }
}
export default AccountPage