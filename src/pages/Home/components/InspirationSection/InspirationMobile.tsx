import {
  Content,
  CTwentyTwenty,
  Description,
  HeaderTitle,
  HeaderWrapper,
  Image,
  ImageWrapper,
  Slider,
  Title,
  Wrapper,
} from './styledMobile';
import { TwentyIcon } from 'components';

const InspirationMobile = () => {
  return (
    <Wrapper>
      <Content>
        <HeaderWrapper>
          <HeaderTitle>Sources of inspiration</HeaderTitle>
          <Description>
            Explore our environments and inspire yourself to find the right
            balance in your home.
          </Description>
        </HeaderWrapper>

        <CTwentyTwenty
          left={
            <ImageWrapper>
              <Title className={'title-left'}>Living Room</Title>
              <Image
                alt={'image'}
                src="https://impact-theme-home.myshopify.com/cdn/shop/files/Quilton-3-seater-Swarm-multi-colour_Quilton-Ottoman-Swarm-multi-colour_Slant-soft-black_Kofi-60x60-blue-tinted-glass_57a0844c-8cf6-4922-9835-a3ab8c8bb772.jpg?v=1663055864&width=2000"
              />
            </ImageWrapper>
          }
          right={
            <ImageWrapper>
              <Title className={'title-right'}>Office</Title>
              <Image
                alt={'image'}
                src="https://impact-theme-home.myshopify.com/cdn/shop/files/CPH-90-Aquavert-linoleum-wb-Lacquer-Walnut-Base_AAC-155_Sense-nougat-alu-tilt-swivel-base_Slant-Soft-black_3e6d67b8-c715-455e-b387-fc04377ae4e8.jpg?v=1663055873&width=2000"
              />
            </ImageWrapper>
          }
          slider={
            <Slider>
              <TwentyIcon width={32} height={40} color={'#000'}></TwentyIcon>
            </Slider>
          }
        />
      </Content>
    </Wrapper>
  );
};

export default InspirationMobile;
