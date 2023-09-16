import React from 'react';
import {
  Content,
  ImageWrapper,
  Info,
  InfoWrapper,
  Wrapper,
  Image,
  SmallTitle,
  Title,
  Description,
  ButtonWrapper,
  ContentWrapper,
} from './styled';
import { FeatureData } from '../../data';
import { ArrowButton } from 'components';
import { CustomerType } from '../CustomerSection';
import { FeatureType } from './index';

const FeatureDesktop = ({
  active,
  handleChangeRight,
  handleChangeLeft,
}: FeatureType) => {
  return (
    <Wrapper>
      <ContentWrapper>
        {FeatureData.map((item, index) => {
          return (
            <>
              <Content>
                <ImageWrapper>
                  <Image
                    active={active == index}
                    index={index}
                    src={item.image}
                    alt={'image'}
                  ></Image>
                </ImageWrapper>
                <InfoWrapper>
                  <Info>
                    <SmallTitle active={active == index}>
                      {item.smallTitle}
                    </SmallTitle>
                    <Title active={active == index}>{item.title}</Title>
                    <Description active={active == index}>
                      {item.description}
                    </Description>
                    <ButtonWrapper hidden={active != index}>
                      <ArrowButton
                        width={'48px'}
                        iconWidth={15}
                        isArrowRight={false}
                        handleClick={() => handleChangeLeft()}
                        noneEvent={false}
                        borderColor={'#f1f1f1'}
                        color={'#272727'}
                      ></ArrowButton>
                      <ArrowButton
                        width={'48px'}
                        iconWidth={15}
                        isArrowRight={true}
                        handleClick={() => handleChangeRight()}
                        noneEvent={false}
                        borderColor={'#f1f1f1'}
                        color={'#272727'}
                      ></ArrowButton>
                    </ButtonWrapper>
                  </Info>
                </InfoWrapper>
              </Content>
            </>
          );
        })}
      </ContentWrapper>
    </Wrapper>
  );
};

export default FeatureDesktop;
