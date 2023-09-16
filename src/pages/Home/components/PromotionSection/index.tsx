import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import PromotionDesktop from './PromotionDesktop';
import PromotionMobile from './PromotionMobile';
import React from 'react';
import { PromotionData } from '../../data';

export type PromotionType = {
  activeCount: number;
  contentActive: any;
  handleChangeLeft: () => void;
  handleChangeRight: () => void;
};

const PromotionSection = () => {
  const appDevice = useAppSelector(selectAppDevice);
  const [activeCount, setActiveCount] = React.useState(0);
  const [contentActive, setContentActive] = React.useState(PromotionData[0]);

  React.useEffect(() => {
    setContentActive(PromotionData[activeCount]);
  }, [activeCount]);

  const handleChangeLeft = () => {
    if (activeCount == 0) {
      setActiveCount(PromotionData.length - 1);
    } else {
      setActiveCount(activeCount - 1);
    }
  };

  const handleChangeRight = () => {
    if (PromotionData.length - 1 == activeCount) {
      setActiveCount(0);
    } else {
      setActiveCount(activeCount + 1);
    }
  };

  const renderElement = {
    [DEVICES.DESKTOP]: (
      <PromotionDesktop
        handleChangeLeft={handleChangeLeft}
        handleChangeRight={handleChangeRight}
        activeCount={activeCount}
        contentActive={contentActive}
      ></PromotionDesktop>
    ),
    [DEVICES.TABLET]: (
      <PromotionMobile
        handleChangeLeft={handleChangeLeft}
        handleChangeRight={handleChangeRight}
        activeCount={activeCount}
        contentActive={contentActive}
      ></PromotionMobile>
    ),
    [DEVICES.MOBILE]: (
      <PromotionMobile
        handleChangeLeft={handleChangeLeft}
        handleChangeRight={handleChangeRight}
        activeCount={activeCount}
        contentActive={contentActive}
      ></PromotionMobile>
    ),
  };
  return renderElement[appDevice.device];
};

export default PromotionSection;
