import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import FeatureDesktop from './FeatureDesktop';
import FeatureMobile from './FeatureMobile';
import React from 'react';
import { FeatureData } from '../../data';

export type FeatureType = {
  active: number;
  handleChangeLeft: () => void;
  handleChangeRight: () => void;
};

const FeatureSection = () => {
  const appDevice = useAppSelector(selectAppDevice);
  const [active, setActive] = React.useState(0);

  const handleChangeLeft = () => {
    if (active == 0) {
      setActive(FeatureData.length - 1);
    } else {
      setActive(active - 1);
    }
  };

  const handleChangeRight = () => {
    if (active == FeatureData.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  };

  const renderElement = {
    [DEVICES.DESKTOP]: (
      <FeatureDesktop
        active={active}
        handleChangeRight={handleChangeRight}
        handleChangeLeft={handleChangeLeft}
      ></FeatureDesktop>
    ),
    [DEVICES.TABLET]: (
      <FeatureMobile
        active={active}
        handleChangeRight={handleChangeRight}
        handleChangeLeft={handleChangeLeft}
      ></FeatureMobile>
    ),
    [DEVICES.MOBILE]: (
      <FeatureMobile
        active={active}
        handleChangeRight={handleChangeRight}
        handleChangeLeft={handleChangeLeft}
      ></FeatureMobile>
    ),
  };

  return renderElement[appDevice.device];
};

export default FeatureSection;
