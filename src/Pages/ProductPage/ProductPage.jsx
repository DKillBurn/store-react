import { Component, Fragment } from 'react';

import Aux from '../../Components/HOC/Aux/Auxil';
import Canister from '../../Components/HOC/Canister/Canister';
import ProductPreview from '../../Components/Product/ProductPreview/ProductPreview'
import ProductInfo from '../../Components/Product/ProductInfo/ProductInfo'
import ProductSeller from '../../Components/Product/ProductSeller/ProductSeller'
import ProductRelated from '../../Components/Product/ProductRelated/ProductRelated'

import data from '../../product.json'

import styles from './ProductPage.module.styl'

class ProductPage extends Component
{
    state ={
        product:{"id":"1","title":"Titulo del producto", "rating":5, "category":{"name":"categoria","subcategory":"subcategoria"}, "brand":{"name":"brand", "model":"modelo"}, "price": 0.00, "description":"descripcion" },
        param: null
    }

    componentDidMount(){
        console.log(this.props.match)
        const param = this.props.match.params.id
        if(this.state.param !== param){
            const product = data.find((e)=>e.id === param)
            console.log(product)
            this.setState({product: product, param: param})
        }
        
        return true
    }
    render(){
        return(
            <Canister className={styles.body}>
                <Aux className={styles.bodyProduct}>
                    <ProductPreview />
                    <ProductInfo product={this.state.product}/>
                </Aux>
                <Aux>
                    <ProductSeller />    
                </Aux>
                <Aux>
                    <ProductRelated />
                </Aux>
            </Canister>
        )
    }
}
export default ProductPage