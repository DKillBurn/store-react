import React from 'react'
import Aux from '../../HOC/Aux/Auxil'

import styles from './SearchFilter.module.styl'
import SearchFilterItem from './SearchFilterItem/SearchFilterItem'

const SearchFilter = React.memo(props=>{

    const data = [
        {cat:'Samsung', value:'samsung'},
        {cat:'Huawei', value:'huawei'},
        {cat:'Xiaomi', value:'xiaomi'},
    ]

    return(
        <Aux className={styles.body}>
            <SearchFilterItem type='list' title='Marca' query='marca' data={data} />
        </Aux>
    )
})
export default SearchFilter