import {
  Wrapper,
  Image,
  ImageWrapper,
  Title,
  ScrollImage,
  TitleWrapper,
  WhiteTitle,
} from './styled';

import React from 'react';
import { FeatureSection } from '../index';
import { ScrollBackgroundType } from './index';

const ScrollBackgroundDesktop = ({
  scrollSticky,
  scrollOffsetHeight,
  scale,
  offsetWidthText,
}: ScrollBackgroundType) => {
  return (
    <Wrapper>
      <ScrollImage
        offsetHeight={scrollOffsetHeight}
        scrollSticky={scrollSticky}
        id={'scroll-image'}
      >
        <ImageWrapper>
          <Image
            id={'scale-image'}
            scale={scale}
            src={
              'https://impact-theme-home.myshopify.com/cdn/shop/files/Palissade_Chair_Palissade_Cone_Table_PC_Portable_olive.jpg?v=1653309441&width=2000'
            }
          ></Image>
          <TitleWrapper scale={scale < 0.315}>
            <WhiteTitle width={offsetWidthText * scale}>
              <Title>We are inspired by the realities of life today</Title>
            </WhiteTitle>
            <Title>We are inspired by the realities of life today</Title>
          </TitleWrapper>
        </ImageWrapper>
      </ScrollImage>
      <FeatureSection></FeatureSection>
    </Wrapper>
  );
};

export default ScrollBackgroundDesktop;
