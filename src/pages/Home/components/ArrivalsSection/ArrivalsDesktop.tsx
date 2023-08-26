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
import ProductCart from './ProductCart';
import { ProductsData } from 'pages/Home/data';

import { ArrowButton } from 'components';

const ArrivalsDesktop = () => {
  const [percent, setPercent] = React.useState(0);
  const [percentInit, setPercentInit] = React.useState(0);

  const handleChangeLeft = () => {
    const productsWrapper = window.document.getElementById('product-wrapper');

    if (productsWrapper && productsWrapper.scrollLeft > 0) {
      productsWrapper.scrollLeft -= 500;

      setPercent(
        ((productsWrapper.scrollLeft + productsWrapper.offsetWidth) * 100) /
          productsWrapper.scrollWidth
      );
    }
  };

  const handleChangeRight = () => {
    const productsWrapper = window.document.getElementById('product-wrapper');

    if (productsWrapper) {
      productsWrapper.scrollLeft += 500;

      setPercent(
        ((productsWrapper.scrollLeft + productsWrapper.offsetWidth) * 100) /
          productsWrapper.scrollWidth
      );
    }
  };

  React.useEffect(() => {
    const productsWrapper = window.document.getElementById('product-wrapper');

    if (productsWrapper) {
      setPercentInit(
        (productsWrapper.offsetWidth * 100) / productsWrapper.scrollWidth
      );
      setPercent(
        (productsWrapper.offsetWidth * 100) / productsWrapper.scrollWidth
      );
    }
  }, []);

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
        <ProductWrapper id={'product-wrapper'}>
          {ProductsData?.map((item, index) => {
            return (
              <ProductCart
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
