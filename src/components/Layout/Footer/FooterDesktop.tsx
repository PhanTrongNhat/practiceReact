import {
  ButtonEmailWrapper,
  Content,
  Description,
  EmailInput,
  EmailWrapper,
  Flag,
  IconWrapper,
  Item,
  List,
  ListWrapper,
  LogoImage,
  LogoWrapper,
  SocialWrapper,
  Title,
  UnitAndSocialWrapper,
  Wrapper,
  Option,
  Select,
  CopyrightPaymentWrapper,
  Copyright,
  IconPaymentWrapper,
} from './styled';
import React from 'react';
import {
  AmericanExpressIcon,
  DinerClubIcon,
  FacebookIcon,
  PayPalIcon,
  VisaIcon,
  InstagramIcon,
  MasterCardIcon,
  DiscoverIcon,
} from 'components';
import { MobileChevronMajor } from '@shopify/polaris-icons';
import { FooterListData } from 'pages/Home/data';

const FooterDesktop = () => {
  return (
    <Wrapper>
      <Content>
        <LogoWrapper>
          <LogoImage
            src={
              'https://impact-theme-home.myshopify.com/cdn/shop/files/logo-impact.png?v=1653297704&width=150'
            }
            alt={'logo image'}
          ></LogoImage>
          <Description>Sign up for new stories and personal offers</Description>
          <EmailWrapper>
            <EmailInput placeholder={'E-mail'}></EmailInput>
            <ButtonEmailWrapper>
              <MobileChevronMajor
                className={'rotate'}
                width={15}
                height={15}
                color={'#fff'}
              ></MobileChevronMajor>
            </ButtonEmailWrapper>
          </EmailWrapper>
        </LogoWrapper>
        {FooterListData.map((item, index) => {
          return (
            <ListWrapper>
              <Title>{item.title}</Title>
              <List>
                {item.data.map((itemChild, indexChild) => {
                  return <Item>{itemChild}</Item>;
                })}
              </List>
            </ListWrapper>
          );
        })}
        <ListWrapper style={{ flexBasis: '25%' }}>
          <Title>About</Title>
          <List>
            <Item>
              Thanks to <a>Article London</a>
              for allowing us to use their products in this demo store and HAY
              for the photography.
            </Item>
          </List>
        </ListWrapper>
      </Content>
      <UnitAndSocialWrapper>
        <SocialWrapper>
          <IconWrapper>
            <FacebookIcon
              height={27}
              width={27}
              color={'rgb(39, 39, 39)'}
            ></FacebookIcon>
          </IconWrapper>
          <IconWrapper>
            <InstagramIcon
              height={27}
              width={27}
              color={'rgb(39, 39, 39)'}
            ></InstagramIcon>
          </IconWrapper>
        </SocialWrapper>
        <UnitAndSocialWrapper>
          <Flag></Flag>
          <Select>
            <Option>United States (USD $)</Option>
          </Select>
        </UnitAndSocialWrapper>
      </UnitAndSocialWrapper>
      <CopyrightPaymentWrapper>
        <Copyright>© 2023, Impact Theme Home. Powered by Shopify</Copyright>
        <IconPaymentWrapper>
          <VisaIcon height={22} width={36}></VisaIcon>
          <MasterCardIcon height={22} width={36}></MasterCardIcon>
          <AmericanExpressIcon height={22} width={36}></AmericanExpressIcon>
          <PayPalIcon height={22} width={36}></PayPalIcon>
          <DinerClubIcon height={22} width={36}></DinerClubIcon>
          <DiscoverIcon height={22} width={36}></DiscoverIcon>
        </IconPaymentWrapper>
      </CopyrightPaymentWrapper>
    </Wrapper>
  );
};

export default FooterDesktop;
