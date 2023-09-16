import { Content, Count, Description, Title, Wrapper } from './styled';
import React from 'react';
import { KindOfDesignType } from './index';

const KindOfDesignMobile = ({ count }: KindOfDesignType) => {
  return (
    <Wrapper>
      <Content>
        <Count>{count}</Count>
        <Title>A new kind of design company</Title>
        <Description>
          Motivated by the certainty that good design is everyone's right, we
          set out to innovate new ways to answer the ever-evolving needs of the
          modern world - but at a more accessible price point than industry
          standards.
        </Description>
      </Content>
    </Wrapper>
  );
};

export default KindOfDesignMobile;
