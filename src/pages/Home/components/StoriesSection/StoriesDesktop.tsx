import {
  Content,
  ContentWrapper,
  HeaderTitle,
  HeaderWrapper,
  ImageWrapper,
  InfoWrapper,
  MobileChevronMajorWrapper,
  ViewAll,
  Wrapper,
  Image,
  SmallTitle,
  InfoContent,
  Title,
  Description,
  DateWrapper,
  Date,
} from './styled';

import { MobileChevronMajor } from '@shopify/polaris-icons';
import React from 'react';
import { CalendarIcon } from 'components';

const StoriesDesktop = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <HeaderWrapper>
          <HeaderTitle>Read our stories</HeaderTitle>
          <ViewAll>
            <p>View all stories</p>
            <MobileChevronMajorWrapper>
              <MobileChevronMajor
                className={'rotate'}
                width={15}
                height={15}
                color={'#fff'}
              ></MobileChevronMajor>
            </MobileChevronMajorWrapper>
          </ViewAll>
        </HeaderWrapper>
        <Content>
          <ImageWrapper>
            <Image
              className={'image'}
              alt={'background image'}
              src={
                'https://impact-theme-home.myshopify.com/cdn/shop/articles/Pouf_cool_rose_Mags_3_Seater_comb_1_Hallingdal_220_Plica_Sprinkle_cream_Outline_Cushion_vivid_blue_76d5321d-a7ce-4891-bd3a-35ad1f2c3a7a.jpg?v=1653735991&width=1200'
              }
            ></Image>
          </ImageWrapper>
          <InfoWrapper>
            <InfoContent>
              <SmallTitle>Inspiration</SmallTitle>
              <Title>Enjoy a cozy living room</Title>
              <Description>
                Explore our most comfortable collections and bring warmth to the
                places you gather with friends and loved ones.
              </Description>
              <DateWrapper>
                <CalendarIcon
                  color={'rgba(255, 255, 255, 0.3)'}
                  width={16}
                  height={16}
                ></CalendarIcon>
                <Date>May 23, 2022</Date>
              </DateWrapper>
            </InfoContent>
          </InfoWrapper>
        </Content>
      </ContentWrapper>
    </Wrapper>
  );
};

export default StoriesDesktop;
