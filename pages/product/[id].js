import React from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
    const router = useRouter()
    return (
        <div>
            <h1>Esta es la página del {router.query.id}</h1>
        </div>
    )
}

export default ProductItem
