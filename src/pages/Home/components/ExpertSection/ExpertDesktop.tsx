import { Content, Item, Title, Wrapper, Image } from './styled';

const ExpertDesktop = () => {
  return (
    <Wrapper>
      <Content>
        <Item
          background={
            'https://impact-theme-home.myshopify.com/cdn/shop/files/designer-george-sowden.jpg?v=1653310809&width=1000'
          }
        >
          <Title>George Sowden</Title>
          <Image
            src={
              'https://impact-theme-home.myshopify.com/cdn/shop/files/designer-george-sowden.jpg?v=1653310809&width=1000'
            }
          ></Image>
        </Item>
        <Item
          background={
            'https://impact-theme-home.myshopify.com/cdn/shop/files/designer-clara-von-zweigbergk.jpg?v=1653310798&width=1000'
          }
        >
          <Title>Clara von Zweigbergk</Title>
          <Image
            src={
              'https://impact-theme-home.myshopify.com/cdn/shop/files/designer-clara-von-zweigbergk.jpg?v=1653310798&width=1000'
            }
          ></Image>
        </Item>
        <Item
          background={
            'https://impact-theme-home.myshopify.com/cdn/shop/files/designer-pierre-charpin.jpg?v=1653310786&width=1000'
          }
        >
          <Title>Pierre Charpin</Title>
          <Image
            src={
              'https://impact-theme-home.myshopify.com/cdn/shop/files/designer-pierre-charpin.jpg?v=1653310786&width=1000'
            }
          ></Image>
        </Item>
      </Content>
    </Wrapper>
  );
};

export default ExpertDesktop;
