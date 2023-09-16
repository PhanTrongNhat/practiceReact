import {
  Description,
  InfoWrapper,
  Item,
  ItemWrapper,
  ListWrapper,
  Title,
  Wrapper,
} from './styledMobile';
import { ServiceData } from '../../data';
import React from 'react';

const ServiceMobile = () => {
  return (
    <Wrapper>
      <ListWrapper>
        {ServiceData.map((item, index) => {
          return (
            <ItemWrapper>
              <Item>
                {item.icon}
                <InfoWrapper>
                  <Title>{item.title}</Title>
                  <Description>{item.description}</Description>
                </InfoWrapper>
              </Item>
            </ItemWrapper>
          );
        })}
      </ListWrapper>
    </Wrapper>
  );
};

export default ServiceMobile;
