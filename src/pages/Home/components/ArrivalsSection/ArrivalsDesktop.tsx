import {
  ButtonWrapper,
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
} from './styled';
import { MobileChevronMajor } from '@shopify/polaris-icons';
import React from 'react';
import ProductCard from 'components/ProductCard';
import { ProductsData } from 'pages/Home/data';

import { ArrowButton } from 'components';
import { ArrivalsType } from './index';

const ArrivalsDesktop = ({
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
          onScroll={() => handleScrollProduct()}
          id={'product-wrapper'}
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
          <ButtonWrapper>
            <ArrowButton
              width={'48px'}
              iconWidth={20}
              isArrowRight={false}
              handleClick={() => handleChangeLeft()}
              noneEvent={percent == percentInit}
              borderColor={'#f1f1f1'}
              color={'#272727'}
            ></ArrowButton>{' '}
            <ArrowButton
              width={'48px'}
              iconWidth={20}
              isArrowRight={true}
              handleClick={() => handleChangeRight()}
              noneEvent={percent == 100}
              borderColor={'#f1f1f1'}
              color={'#272727'}
            ></ArrowButton>
          </ButtonWrapper>
        </StatusAndChangeCarousel>
      </ProductCarousel>
    </Wrapper>
  );
};

export default ArrivalsDesktop;
