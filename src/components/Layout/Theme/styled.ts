import styled from 'styled-components';
import { Button as AButton, Select } from 'antd';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px;
  border-bottom: 1px solid #d2d5d9;

  .ant-select-selector {
    height: 40px !important;

    border: 1px solid #3b3835 !important;
  }

  .ant-select-arrow {
    color: #828a91;
  }
`;

export const BackWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin: 0px 15px;
  height: 80px;
  align-items: center;

  p {
    font-size: 17px;
    font-weight: ${p => p.theme.font.weight.medium};
    margin-bottom: 10px;
  }
`;

export const ThemeWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
`;

export const CSelect = styled(Select)`
  width: 180px !important;
  margin-left: 16px;
  height: 40px;
`;

export const SelectItem = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  align-items: center;
  height: 40px;

  color: #97b0d8;

  font-size: ${p => p.theme.font.size.sm};
  font-weight: ${p => p.theme.font.weight.regular};
  line-height: 24px;
`;

export const Circle = styled.div<{ color: string }>`
  width: 22px;
  height: 22px;
  background-color: ${p => p.color};
  border-radius: 50%;
`;

export const Button = styled.button`
  border: none;
  background-color: unset;
  cursor: pointer;
  padding: 0px 12px;
  height: 100%;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #000;
  }

  &:first-child {
    margin-right: 12px;
  }
`;

export const CButton = styled.button`
  background-color: #008060;
  color: white;
  font-weight: ${p => p.theme.font.weight.bold};
  font-size: ${p => p.theme.font.size.sm};
  line-height: 18px;
  border: none;
  padding: 12px 30px;
  margin-right: 10px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: #004c3f;
  }
`;
