import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import AboutDesktop from './AboutDesktop';
import AboutMobile from './AboutMobile';
import React from 'react';

export type AboutType = {
  height: number;
};

const AboutSection = () => {
  const [height, setHeight] = React.useState(0);
  const [isReload, setIsReload] = React.useState(false);
  const appDevice = useAppSelector(selectAppDevice);

  React.useEffect(() => {
    const componentHeight = window.document.getElementById('background-image');

    if (componentHeight) {
      if (componentHeight.offsetHeight == 0) {
        setIsReload(!isReload);
      } else {
        setHeight(componentHeight.offsetHeight);
      }
    }
  }, [isReload]);

  const renderElement = {
    [DEVICES.DESKTOP]: <AboutDesktop height={height}></AboutDesktop>,
    [DEVICES.TABLET]: <AboutMobile height={height}></AboutMobile>,
    [DEVICES.MOBILE]: <AboutMobile height={height}></AboutMobile>,
  };

  return renderElement[appDevice.device];
};

export default AboutSection;
