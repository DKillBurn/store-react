import React, {useState, useEffect}from 'react'

import Aux from '../HOC/Aux/Auxil'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import * as fa2 from '@fortawesome/free-regular-svg-icons'

import styles from './Rating.module.styl'

const Rating = React.memo(props=>{
    const state = useState({rate:null, customCSS:[styles.body]});

    let selectedCSS = state[0].customCSS.join(' ')

    const handleRating= (rating, requireSaving=true) =>{
        const customCSS = [styles.body]
        switch(rating){
            case 1: customCSS.push(styles.active1); break;
            case 2: customCSS.push(styles.active2); break;
            case 3: customCSS.push(styles.active3); break;
            case 4: customCSS.push(styles.active4); break;
            case 5: customCSS.push(styles.active5); break;
            default: console.log('nothing selected'); break;
        }
        if(requireSaving){
            state[1]({rate:rating, customCSS:customCSS})
        }else{
            selectedCSS = customCSS.join(' ')
        }
            
    }

    const Html = ()=>{
        if(props.readOnly === 'true'){
            handleRating(props.rate, false)
            return(
                <Aux className={selectedCSS}>
                    <Aux><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={fa2.faStar}/></Aux>
                    <Aux><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={fa2.faStar}/></Aux>
                    <Aux><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={fa2.faStar}/></Aux>
                    <Aux><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={fa2.faStar}/></Aux>
                    <Aux><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={fa2.faStar}/></Aux>
                </Aux>
            )
        }else{
            return(
                <Aux className={selectedCSS}>
                    <Aux onClick={()=>handleRating(5)} className={styles.star}><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={fa2.faStar}/></Aux>
                    <Aux onClick={()=>handleRating(4)} className={styles.star}><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={fa2.faStar}/></Aux>
                    <Aux onClick={()=>handleRating(3)} className={styles.star}><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={fa2.faStar}/></Aux>
                    <Aux onClick={()=>handleRating(2)} className={styles.star}><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={fa2.faStar}/></Aux>
                    <Aux onClick={()=>handleRating(1)} className={styles.star}><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={fa2.faStar}/></Aux>
                </Aux>
            )
        }
    }

    return Html()
})

export default Rating