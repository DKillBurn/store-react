import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Logo.module.styl'

const Logo = React.memo(props=>{
    return(
        <NavLink to='/'>
            <img alt='logo' title='logotipo' className={styles.body} src="https://dummyimage.com/140x50/333333/ffffff.png&text=Logotipo" />
        </NavLink>
    )
})

export default Logo