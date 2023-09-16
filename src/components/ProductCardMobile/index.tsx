import {
  BranchAndRatingWrapper,
  ContentWrapper,
  ImageWrapper,
  ProductName,
  QuickAdd,
  Wrapper,
  Image,
  Price,
} from './styled';

interface ProductCartProps {
  title: string;
  branch: string;
  colors: string[];
  price: number;
  isNew?: boolean;
  soldOut?: boolean;
  ratting: number;
  image: string;
  imageHover: string;
  save?: string;
}

const ProductCardMobile = ({
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
      <Image src={image} alt={'product image'}></Image>

      <ContentWrapper>
        <ProductName>{title}</ProductName>
        <Price>${price}.00</Price>
        <QuickAdd className={'button-hover'}>+ Add</QuickAdd>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ProductCardMobile;
