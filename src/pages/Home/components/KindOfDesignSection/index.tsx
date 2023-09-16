import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import KindOfDesignDesktop from './KindOfDesignDesktop';
import KindOfDesignMobile from './KindOfDesignMobile';
import React from 'react';

export type KindOfDesignType = {
  count: number;
};

const KindOfDesignSection = () => {
  const appDevice = useAppSelector(selectAppDevice);
  const [count, setCount] = React.useState(1000);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (count < 2002) setCount(prevState => prevState + 10);
    }, 1);

    return () => clearInterval(timer);
  }, []);

  const renderElement = {
    [DEVICES.DESKTOP]: (
      <KindOfDesignDesktop count={count}></KindOfDesignDesktop>
    ),
    [DEVICES.TABLET]: <KindOfDesignMobile count={count}></KindOfDesignMobile>,
    [DEVICES.MOBILE]: <KindOfDesignMobile count={count}></KindOfDesignMobile>,
  };

  return renderElement[appDevice.device];
};

export default KindOfDesignSection;
