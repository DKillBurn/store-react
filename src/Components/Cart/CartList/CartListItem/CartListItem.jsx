import React from 'react'
import { connect } from 'react-redux'
import Aux from '../../../HOC/Aux/Auxil'

import styles from './CartListItem.module.styl'
import { mapStateToProps, mapDispatchToProps } from './CartListItem.redux'

import { InputAdornment, TextField } from '@material-ui/core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleUp, faChevronCircleDown, faTimes} from '@fortawesome/free-solid-svg-icons'

const CartListItem = React.memo(props=>{
    const [amount, setAmount] = React.useState(props.amount)

    const handleSubmit=(e)=>{
        e.preventDefault()
    }

    const handleAmount=(val)=>{
        switch(val){
            case 0: setAmount(amount+1); props.onAddProduct(props.id); break;
            case 1: if(amount !== 1){setAmount(amount-1); props.onRemoveProduct(props.id);} break;
            default: break;
        }
    }

    const handleRemoveCart=(e)=>{
        e.preventDefault()
        props.onDeleteCart(props.id)
    }

    return(
        <Aux className={styles.body}>
            <Aux className={styles.productImage}>
                <picture>
                    <img alt='miniProduct' src="https://dummyimage.com/100x100/FFFFFF/333333.png" />
                </picture>
            </Aux>
            <Aux className={styles.productDetail}>
                <strong>{props.title}</strong>
                <Aux className={styles.productOption}>
                    <form className={styles.amountBody} onSubmit={handleSubmit}>
                        <TextField fullWidth
                            id='outlined'
                            value={amount}
                            read-only='true'
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
                    <Aux className={styles.deleteOption} onClick={handleRemoveCart}>
                        <FontAwesomeIcon icon={faTimes} size='2x' />
                    </Aux>
                </Aux>
            </Aux>
        </Aux>
    )
})
export default connect(mapStateToProps, mapDispatchToProps)(CartListItem)