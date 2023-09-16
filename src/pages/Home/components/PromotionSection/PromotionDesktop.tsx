import { Button, ContentWrapper, Item, ItemsWrapper, Wrapper } from './styled';
import { MobileChevronMajor } from '@shopify/polaris-icons';
import { PromotionData } from '../../data';
import React from 'react';
import { PromotionType } from './index';

const PromotionDesktop = ({
  handleChangeLeft,
  handleChangeRight,
  contentActive,
  activeCount,
}: PromotionType) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Button onClick={() => handleChangeLeft()}>
          <MobileChevronMajor
            width={20}
            height={20}
            color={'#fff'}
          ></MobileChevronMajor>
        </Button>
        <ItemsWrapper>
          {PromotionData.map((item, index) => {
            return (
              <Item active={activeCount == index} key={index}>
                <p>{contentActive}</p>
              </Item>
            );
          })}
        </ItemsWrapper>

        <Button onClick={() => handleChangeRight()} className={'button-right'}>
          <MobileChevronMajor
            width={20}
            height={20}
            color={'#fff'}
          ></MobileChevronMajor>
        </Button>
      </ContentWrapper>
    </Wrapper>
  );
};

export default PromotionDesktop;
