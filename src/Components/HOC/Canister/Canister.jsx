import React from 'react'

import styles from './Canister.module.styl'

const Canister = React.memo(props =>{
    const postCSS = props.className ? [props.className, styles.body]: undefined
    const css = props.className ? postCSS.join(' ') : styles.body
    return(
        <section {...props} className={css}>
            {props.children}
        </section>
    )
})
export default Canister