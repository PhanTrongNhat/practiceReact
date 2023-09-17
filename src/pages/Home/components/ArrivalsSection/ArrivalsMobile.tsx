import {
  Description,
  HeaderWrapper,
  MobileChevronMajorWrapper,
  ProductCarousel,
  ProductWrapper,
  Status,
  StatusAndChangeCarousel,
  Title,
  TitleWrapper,
  ViewAll,
  Wrapper,
} from './styledMobile';
import { MobileChevronMajor } from '@shopify/polaris-icons';
import { ProductsData } from '../../data';
import { ProductCard } from 'components';
import React from 'react';
import { ArrivalsType } from './index';

const CarouselMobile = ({
  percent,
  percentInit,
  handleChangeLeft,
  handleChangeRight,
  handleScrollProduct,
}: ArrivalsType) => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <TitleWrapper>
          <Title>New arrivals</Title>
          <Description>
            We are inspired by the realities of life today, in which traditional
            divides between personal and professional space are more fluid.
          </Description>
        </TitleWrapper>
        <ViewAll>
          <p>View all </p>
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
      <ProductCarousel>
        <ProductWrapper
          id={'product-wrapper'}
          onScroll={() => handleScrollProduct()}
        >
          {ProductsData?.map((item, index) => {
            return (
              <ProductCard
                key={index}
                title={item.title}
                branch={item.branch}
                colors={item.colors}
                price={item.price}
                isNew={item?.isNew}
                soldOut={item?.soldOut}
                ratting={item.ratting}
                image={item.image}
                imageHover={item.imageHover}
                save={item?.save}
              />
            );
          })}
        </ProductWrapper>
        <StatusAndChangeCarousel>
          <Status percent={percent}></Status>
          {/*<ButtonWrapper>*/}
          {/*  <ArrowButton*/}
          {/*    width={'48px'}*/}
          {/*    iconWidth={20}*/}
          {/*    isArrowRight={false}*/}
          {/*    handleClick={() => handleChangeLeft()}*/}
          {/*    noneEvent={percent == percentInit}*/}
          {/*    borderColor={'#f1f1f1'}*/}
          {/*    color={'#272727'}*/}
          {/*  ></ArrowButton>{' '}*/}
          {/*  <ArrowButton*/}
          {/*    width={'48px'}*/}
          {/*    iconWidth={20}*/}
          {/*    isArrowRight={true}*/}
          {/*    handleClick={() => handleChangeRight()}*/}
          {/*    noneEvent={percent == 100}*/}
          {/*    borderColor={'#f1f1f1'}*/}
          {/*    color={'#272727'}*/}
          {/*  ></ArrowButton>*/}
          {/*</ButtonWrapper>*/}
        </StatusAndChangeCarousel>
      </ProductCarousel>
    </Wrapper>
  );
};

export default CarouselMobile;
