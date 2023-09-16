import {
  ButtonEmailWrapper,
  Content,
  Copyright,
  CopyrightPaymentWrapper,
  Description,
  EmailInput,
  EmailWrapper,
  Flag,
  IconPaymentWrapper,
  IconWrapper,
  Item,
  List,
  ListWrapper,
  LogoImage,
  LogoWrapper,
  Option,
  Select,
  SocialWrapper,
  Title,
  UnitAndSocialWrapper,
  UnitWrapper,
  Wrapper,
} from './styledMobile';
import { MobileChevronMajor } from '@shopify/polaris-icons';
import { FooterListData } from '../../../pages/Home/data';
import {
  AmericanExpressIcon,
  DinerClubIcon,
  FacebookIcon,
  PayPalIcon,
  VisaIcon,
} from '../../Icons';
import { InstagramIcon } from '../../Icons/InstagramIcon';
import { MasterCardIcon } from '../../Icons/MasterCardIcon';
import { DiscoverIcon } from '../../Icons/DiscoverIcon';
import React from 'react';

const FooterMobile = () => {
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
        <ListWrapper style={{ marginBottom: '2.5rem' }}>
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
        <UnitWrapper>
          <Flag></Flag>
          <Select>
            <Option>United States (USD $)</Option>
          </Select>
        </UnitWrapper>
      </UnitAndSocialWrapper>
      <CopyrightPaymentWrapper>
        <IconPaymentWrapper>
          <VisaIcon height={22} width={36}></VisaIcon>
          <MasterCardIcon height={22} width={36}></MasterCardIcon>
          <AmericanExpressIcon height={22} width={36}></AmericanExpressIcon>
          <PayPalIcon height={22} width={36}></PayPalIcon>
          <DinerClubIcon height={22} width={36}></DinerClubIcon>
          <DiscoverIcon height={22} width={36}></DiscoverIcon>
        </IconPaymentWrapper>
        <Copyright>© 2023, Impact Theme Home. Powered by Shopify</Copyright>
      </CopyrightPaymentWrapper>
    </Wrapper>
  );
};

export default FooterMobile;
