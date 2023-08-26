import {
  Avatar,
  AvatarWrapper,
  ButtonWrapper,
  Content,
  ContentWrapper,
  Description,
  DotButton,
  Item,
  ItemsWrapper,
  Name,
  Wrapper,
} from './styled';
import { ArrowButton } from 'components';
import { CustomerData } from '../../data';
import React from 'react';

const CustomerDesktop = () => {
  const [active, setActive] = React.useState(0);

  const handleChangeActiveLeft = () => {
    if (active == 0) {
      setActive(CustomerData.length - 1);
    } else {
      setActive(active - 1);
    }
  };

  const handleChangeActiveRight = () => {
    if (active == CustomerData.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  };

  return (
    <Wrapper>
      <ContentWrapper>
        <Content>
          <ItemsWrapper>
            {CustomerData?.map((item, index) => {
              return (
                <Item active={index == active}>
                  <Description active={active == index}>
                    {item.content}
                  </Description>
                  <AvatarWrapper active={active == index}>
                    <Avatar src={item.image}></Avatar>
                    <Name>{item.name}</Name>
                  </AvatarWrapper>
                </Item>
              );
            })}
          </ItemsWrapper>

          <ButtonWrapper>
            <ArrowButton
              width={'48px'}
              iconWidth={15}
              isArrowRight={false}
              handleClick={() => handleChangeActiveLeft()}
              noneEvent={false}
              borderColor={'#f1f1f1'}
              color={'#fff'}
            ></ArrowButton>
            {CustomerData?.map((item, index) => {
              return (
                <DotButton key={index} active={index == active}></DotButton>
              );
            })}

            <ArrowButton
              width={'48px'}
              iconWidth={15}
              isArrowRight={true}
              handleClick={() => handleChangeActiveRight()}
              noneEvent={false}
              borderColor={'#f1f1f1'}
              color={'#fff'}
            ></ArrowButton>
          </ButtonWrapper>
        </Content>
      </ContentWrapper>
    </Wrapper>
  );
};

export default CustomerDesktop;
