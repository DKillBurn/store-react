import React from 'react'
import Aux from '../HOC/Aux/Auxil'
import { NavLink } from 'react-router-dom'

import styles from './Crater.module.styl'

const Crater = React.memo(props=>{

    const label = (css) =>{
        if(props.enableLabel === 'false' && css !== undefined)
        {
            css.push(styles.container)
            const styleCSS = css.join(' ')
            return (
                <Aux className={styleCSS}>
                    {props.children}
                </Aux>
            )
        }else{
            return(
                <Aux className={styles.container} >
                    <strong className={styles.label}>{props.label}</strong>
                    {props.children}
                </Aux>
            )
        }
    }

    const craterSize = (size, custom) =>{
        const sizeClass = size === '1' 
        ? [styles.body, styles.bodySize1]
        : size === '2' 
        ? [styles.body, styles.bodySize2]
        : size === '3' 
        ? [styles.body, styles.bodySize3]
        : [styles.body]

        if(props.className)
            sizeClass.unshift(props.className)

        if(custom === 'true'){
            return label(sizeClass)
        }else{
            return (
                <NavLink to='/' className={sizeClass.join(' ')}>
                    {label()}
                </NavLink>
            )
        }
    }

    return (craterSize(props.size, props.custom))
})
export default Crater