// this shows how to create our own custom context provider

import React from 'react'
import ProductContext from './ProductContext'

export default function ProductProvider() {
    const [products, setProducts] = useState ([

    ])

    const context = {

    }

    //higher order component

    return <ProductContext.provider value={context}>
        {/* render all the children component */}
        {props.children}
    </ProductContext.provider>
}