import React, { Component } from 'react'

import styles from './Header.module.styl'

import HeaderBottom from './HeaderBottom/HeaderBottom'
import HeaderTop from './HeaderTop/HeaderTop'

class Header extends Component
{
    render()
    {
        return(
            <header className={styles.body}>
                <HeaderTop />
                <HeaderBottom />
            </header>
        )
    }
    
}
export default Header