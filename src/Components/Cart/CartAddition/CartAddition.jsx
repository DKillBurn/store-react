import React from 'react'
import { connect } from 'react-redux'

import { InputAdornment, TextField, Button } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleUp, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'

import Aux from '../../HOC/Aux/Auxil'

import {mapStateToProps, mapDispatchToProps} from './CartAddition.redux'

import styles from './CartAddition.module.styl'

const CartAddition = React.memo(props=>{
    const [amount, setAmount] = React.useState(1)

    const handleSubmit=(e)=>{
        e.preventDefault()
    }

    const handleAmount=(val)=>{
        switch(val){
            case 0: setAmount(amount+1); break;
            case 1: if(amount !== 1){setAmount(amount-1); } break;
            default: break;
        }
    }

    const handleCart=(e)=>{

        e.preventDefault()
        const newCart = props.cart.filter((e)=>e.id !== props.product.id)
        let product = props.cart.find((e)=>e.id === props.product.id)
        if(Boolean(product)){
            product.amount +=amount
        }else{
            product = props.product
            product.amount = amount
        }
        newCart.push(product)
        
        props.onAddToCart(newCart)
        props.onAlertSent({type:'success', message:'Product added to Cart'})
    }

    
    

    return(
        <Aux className={styles.body}>
            <form className={styles.amountBody} onSubmit={handleSubmit}>
                <TextField fullWidth
                    id='outlined'
                    value={amount}
                    read-only = 'true'
                    InputProps={{
                        startAdornment:(
                            <InputAdornment className={styles.button} onClick={()=>handleAmount(0)} position='start'>
                                <FontAwesomeIcon icon={faChevronCircleUp} />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment className={styles.button} onClick={()=>handleAmount(1)} position='end'>
                                <FontAwesomeIcon icon={faChevronCircleDown}/>
                            </InputAdornment>
                        )
                        
                    }}
                    size='small'
                    variant='outlined'
                />
            </form>
            <Aux>
                <Button className={styles.buttonCart} onClick={handleCart} variant="contained">Añadir al Carrito</Button>
            </Aux>
        </Aux>
    )
})
export default connect(mapStateToProps, mapDispatchToProps)(CartAddition)