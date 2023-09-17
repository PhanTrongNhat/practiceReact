import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';

import ProductCardDesktop from './ProductCardDesktop';
import ProductCardMobile from './ProductCardMobile';

export interface ProductCartProps {
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

const ProductCard = ({
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
  const appDevice = useAppSelector(selectAppDevice);

  const renderElement = {
    [DEVICES.DESKTOP]: (
      <ProductCardDesktop
        title={title}
        branch={branch}
        colors={colors}
        price={price}
        isNew={isNew}
        soldOut={soldOut}
        ratting={ratting}
        image={image}
        imageHover={imageHover}
        save={save}
      ></ProductCardDesktop>
    ),
    [DEVICES.TABLET]: (
      <ProductCardMobile
        title={title}
        branch={branch}
        colors={colors}
        price={price}
        isNew={isNew}
        soldOut={soldOut}
        ratting={ratting}
        image={image}
        imageHover={imageHover}
        save={save}
      ></ProductCardMobile>
    ),
    [DEVICES.MOBILE]: (
      <ProductCardMobile
        title={title}
        branch={branch}
        colors={colors}
        price={price}
        isNew={isNew}
        soldOut={soldOut}
        ratting={ratting}
        image={image}
        imageHover={imageHover}
        save={save}
      ></ProductCardMobile>
    ),
  };
  return renderElement[appDevice.device];
};

export default ProductCard;
