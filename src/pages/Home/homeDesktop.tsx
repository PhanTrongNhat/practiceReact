import { Header } from 'components';
import {
  ExpertSection,
  InspirationSection,
  KindOfDesignSection,
  MarqueeSection,
  PromotionSection,
  RoomSection,
  ScrollBackgroundSection,
  SignUpSection,
  StoriesSection,
  ArrivalsSection,
  AboutSection,
  CollectionSection,
  CustomerSection,
  ServiceSection,
  DesignerSection,
  CarouselSection,
} from './components';
import styled from 'styled-components';

const HomeDesktop = () => {
  return (
    <>
      <PromotionSection></PromotionSection>
      <Header></Header>
      <CarouselSection></CarouselSection>
      <ArrivalsSection></ArrivalsSection>
      <MarqueeSection></MarqueeSection>
      <AboutSection></AboutSection>
      <CollectionSection></CollectionSection>
      <ScrollBackgroundSection></ScrollBackgroundSection>
      <CustomerSection></CustomerSection>
      <RoomSection></RoomSection>
      <SignUpSection></SignUpSection>
      <DesignerSection></DesignerSection>
      <ExpertSection></ExpertSection>
      <KindOfDesignSection></KindOfDesignSection>
      <Banner
        src={
          'https://impact-theme-home.myshopify.com/cdn/shop/files/Enamel-family-05.jpg?v=1653311262&width=2000'
        }
      ></Banner>

      <InspirationSection></InspirationSection>
      <StoriesSection></StoriesSection>
      <ServiceSection></ServiceSection>
    </>
  );
};

const Banner = styled.img`
  object-fit: cover;
  object-position: center;
  transform-origin: bottom;
  height: 43vw;
`;

export default HomeDesktop;
