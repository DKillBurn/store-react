import React from 'react'
import { NavLink } from 'react-router-dom'

import Crater from '../../../../Crater/Crater'
import Canister from '../../../../HOC/Canister/Canister'
import SocialNetwork from '../../SocialNetwork/SocialNetwork'
import SocialNetworkItem from '../../SocialNetwork/SocialNetworkItem/SocialNetworkItem'

import styles from './FooterBottom.module.styl'

const FooterBottom = React.memo(props=>{
    return(
        <Canister className={styles.body}>
            <Crater size='1' enableLabel='false' custom='true' className={styles.containerFooter}>
                <strong className={styles.title}>Enlaces Utiles</strong>
                <NavLink to ='/' className={styles.quickLink}>Mis Pedidos</NavLink>
                <NavLink to ='/' className={styles.quickLink}>Preguntas Frequentes</NavLink>
                <NavLink to ='/' className={styles.quickLink}>Metodos de envio</NavLink>
                <NavLink to ='/' className={styles.quickLink}>Cobertura</NavLink>
                <NavLink to ='/' className={styles.quickLink}>Metodos de pago</NavLink>
            </Crater>
            <Crater size='1' enableLabel='false' custom='true' className={styles.containerFooter}>
                <strong className={styles.title}>Mi cuenta</strong>
                <NavLink to ='/' className={styles.quickLink}>Devoluciones</NavLink>
                <NavLink to ='/' className={styles.quickLink}>Historial de compra</NavLink>
                <NavLink to ='/' className={styles.quickLink}>Localizar Pedido</NavLink>
                <NavLink to ='/' className={styles.quickLink}>Ajustes</NavLink>
            </Crater>
            <Crater size='1' enableLabel='false' custom='true' className={styles.containerFooter}>
                <strong className={styles.title}>Contactanos</strong>
                <NavLink to ='/' className={styles.quickLink}>Ayuda con pedido</NavLink>
                <NavLink to ='/' className={styles.quickLink}>Devolver o Reemplazar</NavLink>
                <NavLink to ='/' className={styles.quickLink}>Pedido perdido</NavLink>
                <NavLink to ='/' className={styles.quickLink}>Centro de ayuda</NavLink>
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