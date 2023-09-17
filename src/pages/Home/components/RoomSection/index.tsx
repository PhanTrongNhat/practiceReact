import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import RoomDesktop from './RoomDesktop';
import RoomMobile from './RoomMobile';
import React from 'react';
import { RoomData } from '../../data';

export type RoomType = {
  active: number;
  handleChangeActive?: (e: number) => void;
  handleChangeLeft?: () => void;
  handleChangeRight?: () => void;
};

const RoomSection = () => {
  const appDevice = useAppSelector(selectAppDevice);
  const [active, setActive] = React.useState(0);

  const handleChangeLeft = () => {
    if (active == 0) {
      setActive(RoomData.length - 1);
    } else {
      setActive(active - 1);
    }
  };

  const handleChangeRight = () => {
    if (active == RoomData.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  };

  const handleChangeActive = (e: number) => {
    setActive(e);
  };

  const renderElement = {
    [DEVICES.DESKTOP]: (
      <RoomDesktop
        active={active}
        handleChangeRight={handleChangeRight}
        handleChangeLeft={handleChangeLeft}
      ></RoomDesktop>
    ),
    [DEVICES.TABLET]: (
      <RoomMobile
        active={active}
        handleChangeActive={handleChangeActive}
      ></RoomMobile>
    ),
    [DEVICES.MOBILE]: (
      <RoomMobile
        active={active}
        handleChangeActive={handleChangeActive}
      ></RoomMobile>
    ),
  };

  return renderElement[appDevice.device];
};

export default RoomSection;
