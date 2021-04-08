import { Icon } from '@material-ui/core'
import React from 'react'
import Aux from '../../../../HOC/Aux/Auxil'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faTiktok, faReddit } from '@fortawesome/free-brands-svg-icons'

import styles from './SocialNetworkItem.module.styl'

const SocialNetworkItem = React.memo(props=>{

    const typeNetwork = props.type === 'facebook'
    ? (<FontAwesomeIcon className={styles.facebookColor} icon={faFacebook} size='2x' />)
    : props.type === 'twitter'
    ? (<FontAwesomeIcon className={styles.twitterColor} icon={faTwitter} size='2x' />)
    :props.type === 'instagram'
    ? (<FontAwesomeIcon className={styles.instagramColor} icon={faInstagram} size='2x' />)
    :props.type === 'tiktok'
    ? (<FontAwesomeIcon className={styles.tiktokColor} icon={faTiktok} size='2x' />)
    :props.type === 'reddit'
    ? (<FontAwesomeIcon className={styles.redditColor} icon={faReddit} size='2x' />)
    : (<Icon>search</Icon>)

    return(
        <Aux>
            <a href={props.url}>
                {typeNetwork}
            </a>
        </Aux>
    )
})
export default SocialNetworkItem