import { Button, ContentWrapper, Item, ItemsWrapper, Wrapper } from './styled';
import { MobileChevronMajor } from '@shopify/polaris-icons';
import { PromotionData } from '../../data';
import React from 'react';

const PromotionDesktop = () => {
  const [activeCount, setActiveCount] = React.useState(0);
  const [contentActive, setContentActive] = React.useState(PromotionData[0]);

  React.useEffect(() => {
    setContentActive(PromotionData[activeCount]);
  }, [activeCount]);

  const handleChangeLeft = () => {
    if (activeCount == 0) {
      setActiveCount(PromotionData.length - 1);
    } else {
      setActiveCount(activeCount - 1);
    }
  };

  const handleChangeRight = () => {
    if (PromotionData.length - 1 == activeCount) {
      setActiveCount(0);
    } else {
      setActiveCount(activeCount + 1);
    }
  };

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
