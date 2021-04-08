import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Aux from '../../../HOC/Aux/Auxil'

import styles from './SearchFilterItem.module.styl'

const SearchFilterItem = React.memo(props =>{
    const [data, setData] = useState(props.data)

    const hist = useHistory()
    
    const handleActive = (e)=>{
        setData(data.map((el)=>{
            if(el.cat === e.target.id){
                if(Boolean(el.active)){
                    el.active = !el.active
                }else{
                    el.active = true
                }
            }
            return el
        }))
        const filtro = data.filter((e)=> Boolean(e.active) && e.active).map((e)=> e.value).join(',')
        if(filtro !== ''){
            const params = new URLSearchParams()
            params.append(props.query, filtro)
            hist.push({search: params.toString()})
        }else{
            hist.push(hist.location.pathname)
        }
        
    }


    const options = () =>{
        return data.map((el,i)=>{
            return (<li  key={i} className={el.active ? styles.activeItemList : null} onClick={handleActive}><p id={el.cat}>{el.cat}</p></li>)
        })
    }

    const typeFilter = props.type === 'list'
    ? (
        <ul className={styles.filterItemList}>
            {options()}
        </ul>  
    ): props.type === 'radio'
    ? (
        <ul className={styles.filterItemList}>
            {options()}
        </ul>  
    ):  (
        <ul className={styles.filterItemList}>
            {options()}
        </ul>  
    )

    return(
        <Aux className={styles.body}>
            <strong>{props.title}</strong>
            {typeFilter}
        </Aux>
    )
})
export default SearchFilterItem