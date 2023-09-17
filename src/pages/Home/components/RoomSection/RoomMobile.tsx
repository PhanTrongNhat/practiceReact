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

const RoomMobile = ({ active, handleChangeActive }: RoomType) => {
  const handleScroll = () => {
    const room = window.document.getElementById('room-carousel');

    if (room && handleChangeActive) {
      if (
        room.scrollLeft != 0 &&
        window.document.body.clientWidth / room.scrollLeft < 2
      ) {
        handleChangeActive(1);
      } else {
        handleChangeActive(0);
      }
    }
  };

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

      <InfoWrapper id={'room-carousel'} onScroll={() => handleScroll()}>
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
      </InfoWrapper>
    </Wrapper>
  );
};

export default RoomMobile;
