import { Footer, Theme } from 'components';
import { Home } from 'pages';
import React from 'react';
import { DEVICES } from 'utils';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { initialDevice, selectAppDevice } from './slice';

function App() {
  const dispatch = useAppDispatch();
  const appDevice = useAppSelector(selectAppDevice);

  React.useEffect(() => {
    if (appDevice.isFirstLoad) {
      if (window.innerWidth <= 768) {
        dispatch(initialDevice(DEVICES.MOBILE));
      } else {
        dispatch(initialDevice(DEVICES.DESKTOP));
      }
    }

    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  return (
    <div className="App">
      {/*<Theme></Theme>*/}
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
