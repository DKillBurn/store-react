import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Logo.module.styl'

const Logo = React.memo(props=>{
    return(
        <NavLink to='/'>
            <img className={styles.body} src="" />
        </NavLink>
    )
})

export default Logo