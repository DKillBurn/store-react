import React from 'react'
import Aux from '../../HOC/Aux/Auxil'

import styles from './BannerMain.module.styl'

const BannerMain = React.memo(props=>{
    return(
        <Aux className={styles.body}>
            <img alt='banner' src='https://dummyimage.com/1080x350/9BE7FF/333333.png' />
        </Aux>
    )
})
export default BannerMain