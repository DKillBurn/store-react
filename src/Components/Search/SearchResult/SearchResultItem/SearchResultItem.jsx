import React from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import Aux from '../../../HOC/Aux/Auxil'
import Rating from '../../../Rating/Rating'

import styles from './SearchResultItem.module.styl'
import {mapStateToProps, mapDispatchToProps} from './SearchResultItem.redux'

import data from '../../../../product.json'

const SearchResultItem = React.memo(props=>{

    const hist = useHistory()
    const handleProductDetail=(e, id)=>{
        e.preventDefault()
        const param = '/product/'+id
        hist.push(param)
    }

    const handleAddToCart=(e, id)=>{
        e.preventDefault()
        const newCart = props.cart.filter((e)=>e.id !== id)
        let product = props.cart.find((e)=>e.id === id)
        if(Boolean(product)){
            if(Boolean(product.amount)){
                ++product.amount 
            }
        }else{
            product = data.find((e)=>e.id === id)
            product.amount = 1
        }
        newCart.push(product)
        
        props.onAddToCart(newCart)
    }

    return(
        <Aux className={styles.body}>
            <Aux className={styles.productImage} onClick={(e)=>handleProductDetail(e,props.id)}>
                <picture>
                    <img alt={props.id} src='https://dummyimage.com/200x200/FFFFFF/333333.png' />
                </picture>
            </Aux>
            <Aux className={styles.productDesc}>
                <Aux className={styles.firstLabel}>
                    <strong className={styles.titleFirstLabel} onClick={(e)=>handleProductDetail(e,props.id)}>{props.title}</strong>
                    <Rating readOnly='true' rate={props.rate}/>
                </Aux>
                <Aux className={styles.secondLabel}>
                    <strong className={styles.priceSecondLabel} onClick={(e)=>handleProductDetail(e,props.id)}>
                        {'$'+props.price.toLocaleString('en-US',{ minimumFractionDigits: 2 })}
                    </strong>
                    <strong>Envio Gratis</strong>
                </Aux>
                <Aux className={styles.addCartThirdLabel} onClick={(e=>handleAddToCart(e, props.id))}>
                    <strong>Añadir al carro</strong>
                </Aux>
            </Aux>
        </Aux>
    )
})
export default connect(mapStateToProps, mapDispatchToProps)(SearchResultItem)