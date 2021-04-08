import React from 'react'
import Aux from '../../HOC/Aux/Auxil'

import styles from './BannerMain.module.styl'

const BannerMain = React.memo(props=>{
    return(
        <Aux className={styles.body}>
            &nbsp;
        </Aux>
    )
})
export default BannerMain