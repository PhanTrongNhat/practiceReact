import {
  Description,
  InfoWrapper,
  Item,
  ListWrapper,
  Title,
  Wrapper,
} from './styled';

import React from 'react';
import { ServiceData } from '../../data';

const ServiceDesktop = () => {
  return (
    <Wrapper>
      <ListWrapper>
        {ServiceData.map((item, index) => {
          return (
            <Item>
              {item.icon}
              <InfoWrapper>
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>
              </InfoWrapper>
            </Item>
          );
        })}
      </ListWrapper>
    </Wrapper>
  );
};

export default ServiceDesktop;
