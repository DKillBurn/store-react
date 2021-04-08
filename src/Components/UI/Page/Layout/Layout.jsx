import React,{ useEffect } from 'react'
import { connect } from 'react-redux'

import styles from './Layout.module.styl'
import  { mapStateToProps, mapDispatchToProps } from './Layout.redux'

import { Route, Switch, withRouter } from 'react-router'
import Aux from '../../../HOC/Aux/Auxil'

import Header from '../Header/Header'
import Canister from '../../../HOC/Canister/Canister'
import Footer from '../Footer/Footer'

import { Snackbar } from '@material-ui/core'
import Slide from '@material-ui/core/Slide';

//PAGES
import MainPage from '../../../../Pages/MainPage/MainPage'
import ProductPage from '../../../../Pages/ProductPage/ProductPage'
import SearchPage from '../../../../Pages/SearchPage/SearchPage'
import CartPage from '../../../../Pages/CartPage/CartPage'
import AccountPage from '../../../../Pages/AccountPage/AccountPage'

const Layout = React.memo(props=>{
    const [alert, setAlert] = React.useState(false)

    const handleAlert=()=>{
        const updatedState = false
        setAlert(updatedState)   
    }

    useEffect(()=>{
        if(props.alert !== null){
            setAlert(props.alert)
        }
    },[props.alert])

    //const CSS = null

    return(
        <Aux>
            <Header />
            <Canister className={styles.body}>
                <Switch>
                    <Route path ="/" exact component={MainPage} />
                    <Route path ="/product/:id" exact component={ProductPage} />
                    <Route path ="/search" exact component={SearchPage} />
                    <Route path ="/cart" exact component={CartPage} />
                    <Route path ="/account" exact component={AccountPage} />
                </Switch>
            </Canister>
            <Footer />
            <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}}open={Boolean(alert)} TransitionComponent={Slide} autoHideDuration={6000} onClose={handleAlert} elevation={6} variant='filled' message={alert === null ? '' : alert.message}/>
        </Aux>
    )
})

export default connect (mapStateToProps, mapDispatchToProps)(withRouter(Layout))