import React from 'react'
import Aux from '../HOC/Aux/Auxil'

import styles from './Crater.module.styl'

const Crater = React.memo(props=>{

    const label = (css) =>{
        if(props.enableLabel === 'false' && css !== undefined)
        {
            css.push(styles.container)
            const styleCSS = css.join(' ')
            return (
                <Aux className={styleCSS}  onClick={(e) =>{e.preventDefault(); props.onClick(e)}}>
                    {props.children}
                </Aux>
            )
        }else{
            return(
                <Aux className={styles.container} onClick={(e) =>{e.preventDefault(); props.onClick(e)}}>
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
                <a href="#" className={sizeClass.join(' ')}>
                    {label()}
                </a>
            )
        }
    }

    return (craterSize(props.size, props.custom))
})
export default Crater