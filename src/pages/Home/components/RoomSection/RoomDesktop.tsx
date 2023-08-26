import {
  ButtonWrapper,
  ImageWrapper,
  InfoWrapper,
  ProductsWrapper,
  Wrapper,
  Image,
  DotWrapper,
  Dot,
} from './styled';

import React from 'react';
import { RoomData } from '../../data';
import ProductCart from '../ArrivalsSection/ProductCart';
import { ArrowButton } from 'components';

const RoomDesktop = () => {
  const [active, setActive] = React.useState(0);

  const handleChangeActiveLeft = () => {
    if (active == 0) {
      setActive(RoomData.length - 1);
    } else {
      setActive(active - 1);
    }
  };

  const handleChangeActiveRight = () => {
    if (active == RoomData.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  };

  return (
    <Wrapper>
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
              <ProductCart
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

        <ButtonWrapper>
          <ArrowButton
            width={'48px'}
            iconWidth={15}
            isArrowRight={false}
            handleClick={() => handleChangeActiveLeft()}
            noneEvent={false}
            borderColor={'#f1f1f1'}
            color={'#272727'}
          ></ArrowButton>
          <ArrowButton
            width={'48px'}
            iconWidth={15}
            isArrowRight={true}
            handleClick={() => handleChangeActiveRight()}
            noneEvent={false}
            borderColor={'#f1f1f1'}
            color={'#272727'}
          ></ArrowButton>
        </ButtonWrapper>
      </InfoWrapper>
    </Wrapper>
  );
};

export default RoomDesktop;
