import React from 'react'
import Crater from '../../../../Crater/Crater'
import Canister from '../../../../HOC/Canister/Canister'
import SocialNetwork from '../../SocialNetwork/SocialNetwork'
import SocialNetworkItem from '../../SocialNetwork/SocialNetworkItem/SocialNetworkItem'
import Aux from '../../../../HOC/Aux/Auxil'

import styles from './FooterBottom.module.styl'

const FooterBottom = React.memo(props=>{
    return(
        <Canister className={styles.body}>
            <Crater size='1' enableLabel='false' custom='true' className={styles.containerFooter}>
                <strong className={styles.title}>Enlaces Utiles</strong>
                <a href='#' className={styles.quickLink}>Mis Pedidos</a>
                <a href='#' className={styles.quickLink}>Preguntas Frequentes</a>
                <a href='#' className={styles.quickLink}>Metodos de envio</a>
                <a href='#' className={styles.quickLink}>Cobertura</a>
                <a href='#' className={styles.quickLink}>Metodos de pago</a>
            </Crater>
            <Crater size='1' enableLabel='false' custom='true' className={styles.containerFooter}>
                <strong className={styles.title}>Mi cuenta</strong>
                <a href='#' className={styles.quickLink}>Devoluciones</a>
                <a href='#' className={styles.quickLink}>Historial de compra</a>
                <a href='#' className={styles.quickLink}>Localizar Pedido</a>
                <a href='#' className={styles.quickLink}>Ajustes</a>
            </Crater>
            <Crater size='1' enableLabel='false' custom='true' className={styles.containerFooter}>
                <strong className={styles.title}>Contactanos</strong>
                <a href='#' className={styles.quickLink}>Ayuda con pedido</a>
                <a href='#' className={styles.quickLink}>Devolver o Reemplazar</a>
                <a href='#' className={styles.quickLink}>Pedido perdido</a>
                <a href='#' className={styles.quickLink}>Centro de ayuda</a>
            </Crater>
            <Crater size='1' enableLabel='false' custom='true' className={styles.containerFooter}>
                <strong className={styles.title}>Descarga la aplicacion</strong>
                <p>Android | Apple</p>
                <strong className={styles.titleNetwork}>Redes sociales</strong>
                <SocialNetwork>
                    <SocialNetworkItem type='facebook' url='#' />
                    <SocialNetworkItem type='twitter' url='#' />
                    <SocialNetworkItem type='instagram' url='#' />
                </SocialNetwork>
            </Crater>
        </Canister>
    )
})
export default FooterBottom