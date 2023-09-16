import React from 'react';
import { CustomerData } from '../../data';
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
} from './styledMobile';
import { ArrowButton } from 'components';
import { CustomerType } from './index';

const CustomerMobile = ({
  active,
  handleChangeRight,
  handleChangeLeft,
}: CustomerType) => {
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
              handleClick={() => handleChangeLeft()}
              noneEvent={false}
              borderColor={'rgba(255, 255, 255, 0.12)'}
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
              handleClick={() => handleChangeRight()}
              noneEvent={false}
              borderColor={'rgba(255, 255, 255, 0.12)'}
              color={'#fff'}
            ></ArrowButton>
          </ButtonWrapper>
        </Content>
      </ContentWrapper>
    </Wrapper>
  );
};

export default CustomerMobile;
