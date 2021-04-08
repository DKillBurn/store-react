import React, { useState, useEffect } from 'react'
import Aux from '../../HOC/Aux/Auxil'

import { Avatar, Badge, Menu, MenuItem } from '@material-ui/core'
import { connect } from 'react-redux'

import styles from './ProfileHeader.module.styl'
import { mapStateToProps, mapDispatchToProps } from './ProfileHeader.redux'

import { NavLink, useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUserAlt } from '@fortawesome/free-solid-svg-icons'

const ProfileHeader = React.memo(props=>{
    const state = useState({toggle: null, username:null})

    const hist = useHistory()

    useEffect(()=>{
    }, [props.username, props.cart])

    const handleToggle = (e) =>{
        state[1]({toggle: e.target, username: state[0].username})
    }

    const handleClose= (e) =>{
        state[1]({toggle: null, username: state[0].username})
    }

    const handleLogout= (e) =>{
        props.onUserLogout()
        handleClose(e)
        hist.push('/')
    }

    const handleLogin= (e) =>{
        props.onUserLogged()
    }

    const handleCart=(e)=>{
        if(hist.location.pathname !== '/cart')
            hist.push('/cart')
    }

    const loginHandler= props.username 
    ?(
        <Aux className={styles.profileUsername} onClick={handleToggle}>
            <Avatar>U</Avatar>
            <strong className={styles.profileName}>{props.username}</strong>
        </Aux>
    )
    :(
        <Aux className={styles.profileUsername} onClick={handleLogin}>
            <FontAwesomeIcon className={styles.redditColor} icon={faUserAlt} size='2x' />
            <strong className={styles.profileName}>login</strong>
        </Aux>
    )

    return(
        <Aux className={styles.body}>
            <Aux className={styles.profile}>
                {loginHandler}
                <Aux className={styles.profileCart}  onClick={handleCart}>
                    <Badge badgeContent={props.cart} color='primary'>
                        <FontAwesomeIcon className={styles.redditColor} icon={faShoppingCart} size='2x' />
                    </Badge>
                </Aux>
            </Aux>        
            
            <Menu className={styles.profileMenu}
                id="simple-menu"
                keepMounted
                anchorEl={state[0].toggle}
                open={Boolean(state[0].toggle)}
                onClose={handleClose}>
                <MenuItem onClick={handleClose}><NavLink className={styles.profileRoute} to='/account'>Mi cuenta</NavLink></MenuItem>
                <MenuItem onClick={handleLogout}>Salir</MenuItem>
            </Menu>
        </Aux>
    )
})


export default connect(mapStateToProps, mapDispatchToProps)(ProfileHeader)