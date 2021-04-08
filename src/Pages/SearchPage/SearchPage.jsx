import { Component } from "react";
import Canister from "../../Components/HOC/Canister/Canister";

import SearchFilter from '../../Components/Search/SearchFilter/SearchFilter'
import SearchResult from '../../Components/Search/SearchResult/SearchResult'

import styles from './SearchPage.module.styl'

import data from '../../product.json'

class SearchPage extends Component
{
    state ={
        info: data,
        query: null
    }
    componentDidUpdate(prevProps, prevState){
        const queryText = this.props.location.search.substring(this.props.location.search.indexOf('=')+1, this.props.location.search.length)
        const queryItems = decodeURIComponent(queryText).split(',')
        if(this.state.query !== queryItems.join(',')){
            const newList = data.filter((e)=>{
                return Boolean(queryItems.find((el)=> e.brand.name === el))
            })

            const concat = queryItems.join(',')
            if(newList.length >0){
                this.setState({info: newList, query:concat})
            }else{
                if(queryItems.length >0)
                this.setState({info: data, query:concat})
            }
            
        }  
        
        return true
    }

    render(){
        return(
            <Canister className={styles.body}>
                <SearchFilter />
                <SearchResult data={this.state.info}/>
            </Canister>
        )
    }
}
export default SearchPage