import React from 'react'
import { FeatureButton, FeatureContainer } from './featureElements'

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Pizza of the Day</h1>
      <p>Truffle alfredo sauce topped with 24 carot gold dust.</p>
      <FeatureButton>OrderNow</FeatureButton>
    </FeatureContainer>
  )
}

export default Feature
