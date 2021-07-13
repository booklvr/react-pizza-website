import React from 'react'
import { FooterContainer, FooterWrap, SocialLogo, SocialMedia, SocialMediaWrap } from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Pizza</SocialLogo>
            <SocialIcons>
              
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
