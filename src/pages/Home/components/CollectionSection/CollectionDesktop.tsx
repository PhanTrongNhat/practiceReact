import {
  CarouselWrapper,
  CollectionHeader,
  CollectionImage,
  CollectionItem,
  CollectionItemWrapper,
  CollectionWrapper,
  MobileChevronMajorWrapper,
  NextButton,
  PreButton,
  ShowMoreButton,
  Title,
  TitleWrapper,
  ViewAll,
  Wrapper,
} from './styled';
import { MobileChevronMajor } from '@shopify/polaris-icons';
import React from 'react';
import { CollectionData } from '../../data';
import { ArrowButton } from 'components';
import { CollectionType } from './index';

const CollectionDesktop = ({
  handleChangeRight,
  handleChangeLeft,
  scrollLeft,
  offsetWidthScroll,
  offsetWidth,
}: CollectionType) => {
  return (
    <Wrapper>
      <CollectionHeader>
        <Title>Explore the collections</Title>
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
      </CollectionHeader>
      <CarouselWrapper>
        <CollectionWrapper id={'collection-wrapper'}>
          {CollectionData?.map(item => {
            return (
              <CollectionItemWrapper>
                <CollectionImage src={item.image}></CollectionImage>
                <TitleWrapper className={'title-item'}>
                  <CollectionItem>{item.title}</CollectionItem>
                  <ShowMoreButton className={'show-more'}>
                    <MobileChevronMajor
                      className={'rotate'}
                      width={15}
                      height={15}
                      color={'#fff'}
                    ></MobileChevronMajor>
                  </ShowMoreButton>
                </TitleWrapper>
              </CollectionItemWrapper>
            );
          })}
        </CollectionWrapper>
        <PreButton
          noneEvent={scrollLeft == 0 || offsetWidthScroll == offsetWidth}
        >
          <ArrowButton
            width={'48px'}
            iconWidth={20}
            isArrowRight={false}
            handleClick={() => handleChangeLeft()}
            noneEvent={scrollLeft == 0 || offsetWidthScroll == offsetWidth}
            borderColor={'#f1f1f1'}
            color={'#272727'}
          ></ArrowButton>{' '}
          {/*<MobileChevronMajor*/}
          {/*  width={20}*/}
          {/*  height={20}*/}
          {/*  color={'#000'}*/}
          {/*></MobileChevronMajor>*/}
          {/*<ArrowLeftIcon width={20} height={20} color={'#000'}></ArrowLeftIcon>*/}
        </PreButton>
        <NextButton
          noneEvent={
            scrollLeft + offsetWidth == offsetWidthScroll ||
            offsetWidthScroll == offsetWidth
          }
        >
          <ArrowButton
            width={'48px'}
            iconWidth={20}
            isArrowRight={true}
            handleClick={() => handleChangeRight()}
            noneEvent={scrollLeft == 0 || offsetWidthScroll == offsetWidth}
            borderColor={'#f1f1f1'}
            color={'#272727'}
          ></ArrowButton>{' '}
        </NextButton>
      </CarouselWrapper>
    </Wrapper>
  );
};

export default CollectionDesktop;
