import styled, { keyframes } from 'styled-components';

const MarqueeMobile = () => {
  return (
    <Wrapper>
      <p>Good design is everyone’s right.</p>
      <p>Good design is everyone’s right.</p>
      <p>Good design is everyone’s right.</p>
      <p>Good design is everyone’s right.</p>
      <p>Good design is everyone’s right.</p>
      <p>Good design is everyone’s right.</p>
      <p>Good design is everyone’s right.</p>
      <p>Good design is everyone’s right.</p>
      <p>Good design is everyone’s right.</p>
      <p>Good design is everyone’s right.</p>
      <p>Good design is everyone’s right.</p>
      <p>Good design is everyone’s right.</p>
      <p>Good design is everyone’s right.</p>
      <p>Good design is everyone’s right.</p>
    </Wrapper>
  );
};

export default MarqueeMobile;

const TextAnimation = keyframes` 0% {
    transform: translate(0px, 0px);
  }

  100% {
    transform: translate(-4170px, 0px);
  }`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding-bottom: 48px;

  p {
    min-width: 1270px;
    color: rgb(112, 138, 92);
    font-weight: ${p => p.theme.font.weight.bold};
    font-size: 80px;
    line-height: 80px;
    animation: ${TextAnimation} 48s linear infinite;
  }
`;
