import styled, { keyframes } from 'styled-components';

const MarqueeDesktop = () => {
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
    </Wrapper>
  );
};

export default MarqueeDesktop;

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
  padding-bottom: 80px;

  p {
    min-width: 2170px;
    color: rgb(112, 138, 92);
    font-weight: ${p => p.theme.font.weight.bold};
    font-size: 140px;
    line-height: 140px;
    animation: ${TextAnimation} 18s linear infinite;
  }
`;
