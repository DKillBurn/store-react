import React from 'react'
import { useHistory } from 'react-router-dom'
import {Icon, IconButton, InputAdornment, TextField } from '@material-ui/core'

import styles from './SearchHeader.module.styl'

const SearchHeader = React.memo(props =>{
    const hist = useHistory()
    const handleSubmit=(e)=>{
        e.preventDefault()
        hist.push('/search')
        e.target.reset()
        
    }

    return(
        <form className={styles.body} onSubmit={handleSubmit}>
            <TextField fullWidth className={styles.searchField}
                id='outlined'
                InputProps={{
                    startAdornment:(
                        <InputAdornment position='start'>
                            <Icon>search</Icon>                
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <IconButton size='small'>
                            Lo quiero
                        </IconButton>
                    )
                    
                }}
                size='small'
                variant='outlined'
            />
            
        </form>
    )
})
export default SearchHeader