import {
  BackgroundImage,
  Button,
  Content,
  Description,
  PlusButton,
  Title,
  Wrapper,
} from './styled';
import { PlusIcon } from 'components';
import React from 'react';

const AboutDesktop = () => {
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    const componentHeight = window.document.getElementById('background-image');

    if (componentHeight) {
      setHeight(componentHeight.offsetHeight);
    }
  }, [window.document.getElementById('background-image')?.offsetHeight]);

  return (
    <Wrapper height={height}>
      <Content>
        <Title>About the PC Portable Lamp</Title>
        <Description>
          Constructed in robust plastic and featuring a matte scratch- and
          water-resistant finish, its battery-powered design gives the freedom
          and flexibility to move it anywhere.
        </Description>
        <Button>Learn more</Button>
      </Content>
      <PlusButton>
        <PlusIcon height={16} width={16} color={'#000'}></PlusIcon>
      </PlusButton>
      <PlusButton>
        <PlusIcon height={16} width={16} color={'#000'}></PlusIcon>
      </PlusButton>
      <BackgroundImage
        id={'background-image'}
        src={
          'https://impact-theme-home.myshopify.com/cdn/shop/files/PC_Portable_soft_black_Result_Chair_black_wb_lacquer_oak_Terrazzo_Table.jpg?v=1653301777&width=2000'
        }
        alt={'image'}
      ></BackgroundImage>
    </Wrapper>
  );
};

export default AboutDesktop;
