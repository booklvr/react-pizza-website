import React from 'react'
import {
  ProductDesc,
  ProductImg,
  ProductsContainer,
  ProductsHeading,
  ProductTitle,
  ProductWrapper,
  ProductPrice,
  ProductButton,
  ProductCard,
  ProductInfo,
} from './ProductsElements'

const Products = ({ heading, data }) => {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => (
          <ProductCard key={index}>
            <ProductImg src={product.img} alt={product.alt} />
            <ProductInfo>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductDesc>{product.desc}</ProductDesc>
              <ProductPrice>{product.price}</ProductPrice>
              <ProductButton>{product.button}</ProductButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductWrapper>
    </ProductsContainer>
  )
}

export default Products
