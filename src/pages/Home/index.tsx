import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import HomeDesktop from './homeDesktop';
import HomeMobile from './homeMobile';
import React from 'react';

const Home = () => {
  const appDevice = useAppSelector(selectAppDevice);

  const renderElement = {
    [DEVICES.DESKTOP]: <HomeDesktop></HomeDesktop>,
    [DEVICES.TABLET]: <HomeMobile></HomeMobile>,
    [DEVICES.MOBILE]: <HomeMobile></HomeMobile>,
  };

  return renderElement[appDevice.device];
};

export default Home;
