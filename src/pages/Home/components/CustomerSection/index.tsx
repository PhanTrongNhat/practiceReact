import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import CustomerDesktop from './CustomerDesktop';
import CustomerMobile from './CustomerMobile';
import React from 'react';
import { CustomerData } from '../../data';

export type CustomerType = {
  active: number;
  handleChangeLeft: () => void;
  handleChangeRight: () => void;
};

const CustomerSection = () => {
  const appDevice = useAppSelector(selectAppDevice);
  const [active, setActive] = React.useState(0);

  const handleChangeLeft = () => {
    if (active == 0) {
      setActive(CustomerData.length - 1);
    } else {
      setActive(active - 1);
    }
  };

  const handleChangeRight = () => {
    if (active == CustomerData.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  };

  const renderElement = {
    [DEVICES.DESKTOP]: (
      <CustomerDesktop
        active={active}
        handleChangeRight={handleChangeRight}
        handleChangeLeft={handleChangeLeft}
      ></CustomerDesktop>
    ),
    [DEVICES.TABLET]: (
      <CustomerMobile
        active={active}
        handleChangeRight={handleChangeRight}
        handleChangeLeft={handleChangeLeft}
      ></CustomerMobile>
    ),
    [DEVICES.MOBILE]: (
      <CustomerMobile
        active={active}
        handleChangeRight={handleChangeRight}
        handleChangeLeft={handleChangeLeft}
      ></CustomerMobile>
    ),
  };

  return renderElement[appDevice.device];
};

export default CustomerSection;
