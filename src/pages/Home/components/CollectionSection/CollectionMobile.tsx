import React from 'react';
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
} from './styledMobile';
import { MobileChevronMajor } from '@shopify/polaris-icons';
import { CollectionData } from '../../data';
import { CollectionType } from './index';

const CollectionMobile = ({
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
      </CarouselWrapper>
    </Wrapper>
  );
};

export default CollectionMobile;
