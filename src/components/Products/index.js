import React from 'react'
import data from './data'
import {
  ProductDesc,
  ProductImage,
  ProductsContainer,
  ProductsHeading,
  ProductTitle,
  ProductWrapper,
} from './ProductsElements'

const Products = () => {
  return (
    <ProductsContainer>
      <ProductsHeading></ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => (
          <ProductCard key={index}>
            <ProductImage src={product.image} alt={product.alt} />
            <ProductInfo>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductDesc>{product.desc}</ProductDesc>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductWrapper>
    </ProductsContainer>
  )
}

export default Products
