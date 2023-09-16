import {
  ButtonWrapper,
  Content,
  ContentButton,
  ContentWrapper,
  SecondTitle,
  Slice,
  SliceContent,
  SliceImage,
  SliceImageWrapper,
  SmallTitle,
  Title,
  Wrapper,
} from './styled';
import { CarouselData } from '../../data';

import React from 'react';
import { ArrowButton } from 'components';
import { CarouselType } from './index';

const CarouselDesktop = ({
  handleChangeLeft,
  handleChangeRight,
  activeCount,
}: CarouselType) => {
  return (
    <Wrapper>
      {CarouselData.map((item, index) => {
        return (
          <Slice key={index} active={index == activeCount}>
            <SliceContent>
              <ContentWrapper>
                <Content>
                  <SmallTitle active={index == activeCount}>
                    {item?.smallTitle}
                  </SmallTitle>
                  <Title active={index == activeCount}>{item?.title}</Title>
                  <SecondTitle active={index == activeCount}>
                    {item?.secondTitle}
                  </SecondTitle>
                  <ContentButton active={index == activeCount}>
                    {item.buttonText}
                  </ContentButton>
                </Content>
              </ContentWrapper>
              <SliceImageWrapper>
                <SliceImage
                  active={index == activeCount}
                  src={item.src}
                  alt={'carousel image'}
                />
              </SliceImageWrapper>
            </SliceContent>
          </Slice>
        );
      })}
      <ButtonWrapper>
        <ArrowButton
          width={'56px'}
          iconWidth={25}
          isArrowRight={false}
          handleClick={() => handleChangeLeft()}
          noneEvent={false}
          borderColor={'#f1f1f1'}
          color={'#fff'}
        ></ArrowButton>
        <ArrowButton
          width={'56px'}
          iconWidth={25}
          isArrowRight={true}
          handleClick={() => handleChangeRight()}
          noneEvent={false}
          borderColor={'#f1f1f1'}
          color={'#fff'}
        ></ArrowButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default CarouselDesktop;
