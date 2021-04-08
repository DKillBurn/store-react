import { Component } from 'react'
import { connect } from 'react-redux'

import { Button } from '@material-ui/core'
import Aux from '../../Components/HOC/Aux/Auxil'
import CartList from '../../Components/Cart/CartList/CartList'

import styles from './CartPage.module.styl'

import { mapStateToProps, mapDispatchToProps } from './CartPage.redux'

class CartPage extends Component
{
    state={
        cart:[],
        selectedProductToDelete: 0
    }
    componentDidMount(){
        if(this.state.cart.length !== this.props.cart.length){
            this.setState({cart: this.props.cart})
        }
        return true
    }

    componentDidUpdate(prevProps,prevState){
        if(this.state.cart.length !== this.props.cart.length){
            this.setState({cart: this.props.cart})
        }
        return true
    }

    render()
    {

        const subTotal = this.state.cart.map((e=>e.price*e.amount)).reduce((a,b)=>a+b,0)

        const iva = 16

        const total = subTotal + iva

        const cartTotal = this.state.cart.length > 0 
        ? (<Aux className={styles.bodyCartTotal}>
                <Aux className={styles.cartTotal}>
                    <strong className={styles.titleTotal}>{this.props.amount} producto(s) en el carrito</strong>
                    <Aux className={styles.amountDiv}>
                        <p>subtotal</p>
                        <span>{'$'+subTotal.toLocaleString('en-US',{ minimumFractionDigits: 2 })}</span>
                    </Aux>
                    <Aux className={styles.amountDiv}>
                        <p>envio</p>
                        <span>{'$'+(0).toLocaleString('en-US',{ minimumFractionDigits: 2 })}</span>
                    </Aux>
                    <Aux className={styles.amountDiv}>
                        <p>impuesto</p>
                        <span>{'$'+iva.toLocaleString('en-US',{ minimumFractionDigits: 2 })}</span>
                    </Aux>
                    <Aux className={styles.amountTotal}>
                        <p>Total</p>
                        <span>{'$'+total.toLocaleString('en-US',{ minimumFractionDigits: 2 })}</span>
                    </Aux>
                </Aux>
                <Aux className={styles.payTotal}>
                    <Button className={styles.buttonPay} variant="contained">Pagar</Button>
                </Aux>
            </Aux>)
        :(
            <Aux></Aux>
        )

        return(
            <Aux className={styles.body}>
                <CartList products={this.state.cart} />
                {cartTotal}
            </Aux>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartPage)