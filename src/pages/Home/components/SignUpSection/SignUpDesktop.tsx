import {
  ContentWrapper,
  ImageWrapper,
  Wrapper,
  Image,
  InfoWrapper,
  Title,
  TitleWrapper,
  Description,
  Info,
  EmailWrapper,
  InputWrapper,
  EmailInput,
  Subscribe,
  MoreInfo,
} from './styled';
import { EmailIcon } from 'components';

const SignUpDesktop = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <ImageWrapper>
          <Image
            src={
              'https://impact-theme-home.myshopify.com/cdn/shop/files/Arcs_Vase_red_Chim_Chim_Scent_Diffuser_light_beige_Tint_Wine_Glass_1.jpg?v=1656418824&width=1200'
            }
          ></Image>
        </ImageWrapper>

        <InfoWrapper>
          <Info>
            <p>@</p>
            <TitleWrapper>
              <Title>Sign up to the newsletter.</Title>
              <Description>
                Subscribe to get notified about new stories, news and personal
                offers.
              </Description>
            </TitleWrapper>
            <EmailWrapper>
              <InputWrapper>
                <EmailInput placeholder={'E-mail'}></EmailInput>

                <Subscribe>
                  <EmailIcon></EmailIcon>
                  <p>SubScribe</p>
                </Subscribe>
              </InputWrapper>
            </EmailWrapper>
            <MoreInfo>
              By completing this form you are signing up to receive our emails.
              You can unsubscribe at any time.
            </MoreInfo>
          </Info>
        </InfoWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default SignUpDesktop;
