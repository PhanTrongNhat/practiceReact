import {
  ButtonWrapper,
  Dot,
  DotWrapper,
  Image,
  ImageWrapper,
  InfoWrapper,
  ProductsWrapper,
  Title,
  Wrapper,
} from './styledMobile';
import { RoomData } from '../../data';
import { ProductCardMobile } from 'components';
import React from 'react';
import { RoomType } from './index';

const RoomMobile = ({ active }: RoomType) => {
  return (
    <Wrapper>
      <Title>Shop the room</Title>

      <ImageWrapper>
        <Image
          alt={'image'}
          src={
            'https://impact-theme-home.myshopify.com/cdn/shop/files/Pandarine_3_Seater_reclining_armrest_Lint_beige_oiled_oak_legs_Plica_Sprinkle_cream_Shaggy_Rug_cream.jpg?v=1656505302&width=1000'
          }
        ></Image>
        <DotWrapper active={active == 0}>
          <Dot></Dot>
        </DotWrapper>
        <DotWrapper active={active == 1}>
          <Dot></Dot>
        </DotWrapper>
      </ImageWrapper>

      <InfoWrapper>
        {RoomData?.map((item, index) => {
          return (
            <ProductsWrapper active={index == active}>
              <ProductCardMobile
                key={index}
                title={item.title}
                branch={item.branch}
                colors={item.colors}
                price={item.price}
                isNew={item?.isNew}
                soldOut={item?.soldOut}
                ratting={item.ratting}
                image={item.image}
                imageHover={item.imageHover}
                save={item?.save}
              />
            </ProductsWrapper>
          );
        })}

        {/*<ButtonWrapper>*/}
        {/*  <ArrowButton*/}
        {/*    width={'48px'}*/}
        {/*    iconWidth={15}*/}
        {/*    isArrowRight={false}*/}
        {/*    handleClick={() => handleChangeLeft()}*/}
        {/*    noneEvent={false}*/}
        {/*    borderColor={'#f1f1f1'}*/}
        {/*    color={'#272727'}*/}
        {/*  ></ArrowButton>*/}
        {/*  <ArrowButton*/}
        {/*    width={'48px'}*/}
        {/*    iconWidth={15}*/}
        {/*    isArrowRight={true}*/}
        {/*    handleClick={() => handleChangeRight()}*/}
        {/*    noneEvent={false}*/}
        {/*    borderColor={'#f1f1f1'}*/}
        {/*    color={'#272727'}*/}
        {/*  ></ArrowButton>*/}
        {/*</ButtonWrapper>*/}
      </InfoWrapper>
    </Wrapper>
  );
};

export default RoomMobile;
