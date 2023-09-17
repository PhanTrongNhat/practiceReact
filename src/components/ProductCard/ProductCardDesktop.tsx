import { StarIcon } from 'components/index';
import React from 'react';

import {
  BranchAndRatingWrapper,
  BranchName,
  Color,
  ColorsWrapper,
  ContentWrapper,
  HoverImage,
  Image,
  ImageWrapper,
  InfoWrapper,
  IsNew,
  Price,
  ProductName,
  QuickAdd,
  RattingWrapper,
  Save,
  SoldOut,
  Wrapper,
} from './styled';
import { ProductCartProps } from '.';

const ProductCardDesktop = ({
  title,
  branch,
  colors,
  price,
  isNew,
  soldOut,
  ratting,
  image,
  imageHover,
  save,
}: ProductCartProps) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={image} alt={'product image'}></Image>
        <HoverImage src={imageHover} alt={'product image'}></HoverImage>
        <InfoWrapper>
          {isNew ? <IsNew>New</IsNew> : <></>}
          {soldOut ? <SoldOut>Sold out</SoldOut> : <></>}
          {save ? <Save>{save}</Save> : <></>}
        </InfoWrapper>
        <QuickAdd className={'button-hover'}>+ Quick Add</QuickAdd>
      </ImageWrapper>
      <ContentWrapper>
        <BranchAndRatingWrapper>
          <BranchName>{branch}</BranchName>
          <RattingWrapper>
            <p>{ratting}</p>
            <StarIcon
              width={15}
              height={15}
              color={'rgb(255, 183, 74)'}
            ></StarIcon>
          </RattingWrapper>
        </BranchAndRatingWrapper>
        <ProductName>{title}</ProductName>
        <Price>${price}.00</Price>
        <ColorsWrapper>
          {colors.map((item, index) => {
            return <Color key={index} color={item}></Color>;
          })}
        </ColorsWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ProductCardDesktop;
