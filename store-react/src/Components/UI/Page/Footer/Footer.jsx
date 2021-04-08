import React from 'react'
import Aux from '../../../HOC/Aux/Auxil'
import FooterBottom from './FooterBottom/FooterBottom'
import FooterTop from './FooterTop/FooterTop'

import styles from './Footer.module.styl'

const Footer = React.memo(props=>{
    return(
        <Aux className={styles.body}>
            <FooterTop />
            <FooterBottom />
        </Aux>
    )
})
export default Footer