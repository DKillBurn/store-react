import React from 'react'
import Aux from '../../../../HOC/Aux/Auxil'

import styles from './FooterTop.module.styl'

const FooterTop = React.memo(props=>{
    return(
        <Aux className={styles.body}>
            <p>Copyright © 2021 React Project, All Rights Reserved</p>
        </Aux>
    )
})
export default FooterTop