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
import { FeatureType } from './index';

const FeatureMobile = ({
  active,
  handleChangeRight,
  handleChangeLeft,
}: FeatureType) => {
  const [height, setHeight] = React.useState(0);
  const [isReload, setIsReload] = React.useState(false);

  React.useEffect(() => {
    const component = window.document.getElementById('feature-section-mobile');
    const componentImage = window.document.getElementById(
      'feature-section-mobile-image'
    );

    if (componentImage && component && height == 0) {
      setIsReload(!isReload);

      if (component.clientHeight && componentImage.clientHeight) {
        setHeight(component.clientHeight);
      }
    }
  }, [isReload]);

  return (
    <Wrapper height={height}>
      <ContentWrapper>
        {FeatureData.map((item, index) => {
          return (
            <Content id={'feature-section-mobile'}>
              <ImageWrapper id={'feature-section-mobile-image'}>
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
                      handleClick={() => handleChangeLeft()}
                      noneEvent={false}
                      borderColor={'#f1f1f1'}
                      color={'#272727'}
                    ></ArrowButton>
                    <ArrowButton
                      width={'40px'}
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
          );
        })}
      </ContentWrapper>
    </Wrapper>
  );
};

export default FeatureMobile;
