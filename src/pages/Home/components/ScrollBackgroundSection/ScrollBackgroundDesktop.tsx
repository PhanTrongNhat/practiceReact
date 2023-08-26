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

const ScrollBackgroundDesktop = () => {
  const [scrollSticky, setScrollSticky] = React.useState(false);
  const [offsetHeight, setOffsetHeight] = React.useState(0);
  const [scrollOffsetHeight, setScrollOffsetHeight] = React.useState(0);
  const [scale, setScale] = React.useState(0.3);
  const [offsetWidthText, setOffsetWidthText] = React.useState(0);

  React.useEffect(() => {}, []);

  const controlScrollImage = () => {
    const scroll = window.document.getElementById('scroll-image');

    const header = window.document.getElementById('header');

    const image = window.document.getElementById('scale-image');

    if (scroll && header && scroll.offsetTop > header.offsetHeight) {
      setScrollSticky(true);
    } else {
      setScrollSticky(false);
    }

    if (header && offsetHeight == 0) {
      setOffsetHeight(header.offsetHeight);
      setScrollOffsetHeight(header.offsetHeight);
    }

    if (
      header &&
      scroll &&
      scrollOffsetHeight > 0 &&
      scroll.offsetTop > header.offsetHeight
    ) {
      setScrollOffsetHeight(2 * header.offsetHeight - scroll.offsetTop);
    }

    if (
      header &&
      scroll &&
      scrollOffsetHeight > 0 &&
      scroll.offsetTop <= header.offsetHeight
    ) {
      setScrollOffsetHeight(header.offsetHeight);
    }

    if (scroll) {
      if (
        scroll.offsetTop / scroll.offsetHeight > 0.3 &&
        1 >= scroll.offsetTop / scroll.offsetHeight
      ) {
        if (scroll.offsetTop / scroll.offsetHeight > 0.9) {
          setScale(1);
        } else {
          setScale(scroll.offsetTop / scroll.offsetHeight);
        }
      }
    }

    if (header && offsetWidthText == 0) {
      setOffsetWidthText(header.offsetWidth);
    }
  };

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlScrollImage);

      return () => {
        window.removeEventListener('scroll', controlScrollImage);
      };
    }
  }, []);

  React.useEffect(() => {
    console.log('data1', offsetHeight);
  }, [offsetHeight]);

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
