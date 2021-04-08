import React from 'react'

import Aux from '../../HOC/Aux/Auxil'
import ProductPreviewItem from './ProductPreviewItem/ProductPreviewItem'

import styles from './ProductPreview.module.styl'

const ProductPreview = React.memo(props =>{

    return(
        <Aux className={styles.body}>
            <Aux className={styles.bodyProductPreview}>
                <img src=""  />
            </Aux>
            <Aux className={styles.bodyProductThumbail}>
                <Aux className={styles.productThumbail} >
                    <ProductPreviewItem />
                    <ProductPreviewItem />
                    <ProductPreviewItem />
                    <ProductPreviewItem />
                    <ProductPreviewItem />
                    <ProductPreviewItem />
                    <ProductPreviewItem />
                    <ProductPreviewItem />
                    <ProductPreviewItem />
                    <ProductPreviewItem />
                    <ProductPreviewItem />
                    <ProductPreviewItem />
                    <ProductPreviewItem />
                    <ProductPreviewItem />
                    <ProductPreviewItem />
                </Aux>
            </Aux>
        </Aux>
    )
})
export default ProductPreview