import {
  Image,
  ImageWrapper,
  ScrollImage,
  Title,
  TitleWrapper,
  WhiteTitle,
  Wrapper,
} from './styledMobile';
import { FeatureSection } from '../index';
import React from 'react';
import { ScrollBackgroundType } from './index';

const ScrollBackgroundMobile = ({
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

export default ScrollBackgroundMobile;
