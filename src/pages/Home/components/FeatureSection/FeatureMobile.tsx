import React from 'react';
import { FeatureData } from '../../data';
import {
  ButtonWrapper,
  Content,
  ContentWrapper,
  Description,
  Image,
  ImageWrapper,
  Info,
  InfoWrapper,
  SmallTitle,
  Title,
  Wrapper,
} from './styledMobile';
import { ArrowButton } from 'components';

const FeatureMobile = () => {
  const [active, setActive] = React.useState(0);

  const handleChangeActiveLeft = () => {
    if (active == 0) {
      setActive(FeatureData.length - 1);
    } else {
      setActive(active - 1);
    }
  };

  const handleChangeActiveRight = () => {
    if (active == FeatureData.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  };

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
                        width={'40px'}
                        iconWidth={15}
                        isArrowRight={false}
                        handleClick={() => handleChangeActiveLeft()}
                        noneEvent={false}
                        borderColor={'#f1f1f1'}
                        color={'#272727'}
                      ></ArrowButton>
                      <ArrowButton
                        width={'40px'}
                        iconWidth={15}
                        isArrowRight={true}
                        handleClick={() => handleChangeActiveRight()}
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

export default FeatureMobile;
