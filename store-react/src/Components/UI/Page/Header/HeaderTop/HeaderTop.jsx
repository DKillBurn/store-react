import React from 'react'

import Aux from '../../../../HOC/Aux/Auxil'
import Canister from '../../../../HOC/Canister/Canister'
import Logo from '../../Logo/Logo'
import SearchHeader from '../../../../Search/SearchHeader/SearchHeader'

import styles from './HeaderTop.module.styl'
import ProfileHeader from '../../../../Profile/ProfileHeader/ProfileHeader'

const HeaderTop= React.memo(props =>{
    return(
        <Aux className={styles.body}>
            <Canister className={styles.container}>
                <Logo />
                <SearchHeader />
                <ProfileHeader />
            </Canister>
        </Aux>
    )
})
export default HeaderTop