import React from 'react'
import Aux from '../../HOC/Aux/Auxil'
import SearchResultItem from './SearchResultItem/SearchResultItem'

import styles from './SearchResult.module.styl'

const SearchResult = React.memo(props=>{

    const resultList = props.data.map((el)=>{
        return (<SearchResultItem key={el.id} id={el.id} title={el.title} price={el.price} rate={el.rating} />)
    })
    return(
        <Aux className={styles.body}>
            {resultList}
        </Aux>
    )
})
export default SearchResult