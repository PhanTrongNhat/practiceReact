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

const CarouselDesktop = () => {
  const [activeCount, setActiveCount] = React.useState(0);

  const handleChangeLeft = () => {
    if (activeCount == 0) {
      setActiveCount(CarouselData.length - 1);
    } else {
      setActiveCount(activeCount - 1);
    }
  };

  const handleChangeRight = () => {
    if (CarouselData.length - 1 == activeCount) {
      setActiveCount(0);
    } else {
      setActiveCount(prevState => prevState + 1);
    }
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      handleChangeRight();
    }, 5000);

    return () => clearInterval(timer);
  }, [activeCount]);

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
