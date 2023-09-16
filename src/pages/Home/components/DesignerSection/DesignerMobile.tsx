import {
  Button,
  Content,
  Description,
  SmallTitle,
  Title,
  Wrapper,
} from './styled';

const DesignerMobile = () => {
  return (
    <Wrapper>
      <Content>
        <SmallTitle>Designers</SmallTitle>
        <Title>From all over the world</Title>
        <Description>
          HAY has always believed that good design is everyone’s right. That’s
          why, from the very beginning, co-founders and Creative Directors Mette
          and Rolf Hay committed to working with their generation’s best
          designers from all over the world to create high-quality products that
          would be available to a wide audience.
        </Description>
        <Button>Views designers</Button>
      </Content>
    </Wrapper>
  );
};

export default DesignerMobile;
