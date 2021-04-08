import React from 'react'
import Aux from '../../../HOC/Aux/Auxil'

import styles from './SocialNetwork.module.styl'

const SocialNetwork = React.memo(props=>{
    return(
        <Aux className={styles.body}>
            {props.children}
        </Aux>
    )
})
export default SocialNetwork