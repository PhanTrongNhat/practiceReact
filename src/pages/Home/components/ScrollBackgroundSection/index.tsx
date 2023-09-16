import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import ScrollBackgroundDesktop from './ScrollBackgroundDesktop';
import ScrollBackgroundMobile from './ScrollBackroundMobile';
import React from 'react';

export type ScrollBackgroundType = {
  scrollSticky: boolean;
  scale: number;
  scrollOffsetHeight: number;
  offsetWidthText: number;
};

const ScrollBackgroundSection = () => {
  const appDevice = useAppSelector(selectAppDevice);
  const [scrollSticky, setScrollSticky] = React.useState(false);
  const [offsetHeight, setOffsetHeight] = React.useState(0);
  const [scrollOffsetHeight, setScrollOffsetHeight] = React.useState(0);
  const [scale, setScale] = React.useState(0.3);
  const [offsetWidthText, setOffsetWidthText] = React.useState(0);

  React.useEffect(() => {}, []);

  const controlScrollImage = () => {
    const scroll = window.document.getElementById('scroll-image');

    const header = window.document.getElementById('header');

    const image = window.document.getElementById('scale-image');

    if (scroll && header && scroll.offsetTop > header.offsetHeight) {
      setScrollSticky(true);
    } else {
      setScrollSticky(false);
    }

    if (header && offsetHeight == 0) {
      setOffsetHeight(header.offsetHeight);
      setScrollOffsetHeight(header.offsetHeight);
    }

    if (
      header &&
      scroll &&
      scrollOffsetHeight > 0 &&
      scroll.offsetTop > header.offsetHeight
    ) {
      setScrollOffsetHeight(2 * header.offsetHeight - scroll.offsetTop);
    }

    if (
      header &&
      scroll &&
      scrollOffsetHeight > 0 &&
      scroll.offsetTop <= header.offsetHeight
    ) {
      setScrollOffsetHeight(header.offsetHeight);
    }

    if (scroll) {
      if (
        scroll.offsetTop / scroll.offsetHeight > 0.3 &&
        1 >= scroll.offsetTop / scroll.offsetHeight
      ) {
        if (scroll.offsetTop / scroll.offsetHeight > 0.9) {
          setScale(1);
        } else {
          setScale(scroll.offsetTop / scroll.offsetHeight);
        }
      }
    }

    if (header && offsetWidthText == 0) {
      setOffsetWidthText(header.offsetWidth);
    }
  };

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlScrollImage);

      return () => {
        window.removeEventListener('scroll', controlScrollImage);
      };
    }
  }, []);

  const renderElement = {
    [DEVICES.DESKTOP]: (
      <ScrollBackgroundDesktop
        scrollSticky={scrollSticky}
        scrollOffsetHeight={scrollOffsetHeight}
        scale={scale}
        offsetWidthText={offsetWidthText}
      ></ScrollBackgroundDesktop>
    ),
    [DEVICES.TABLET]: (
      <ScrollBackgroundMobile
        scrollSticky={scrollSticky}
        scrollOffsetHeight={scrollOffsetHeight}
        scale={scale}
        offsetWidthText={offsetWidthText}
      ></ScrollBackgroundMobile>
    ),
    [DEVICES.MOBILE]: (
      <ScrollBackgroundMobile
        scrollSticky={scrollSticky}
        scrollOffsetHeight={scrollOffsetHeight}
        scale={scale}
        offsetWidthText={offsetWidthText}
      ></ScrollBackgroundMobile>
    ),
  };

  return renderElement[appDevice.device];
};

export default ScrollBackgroundSection;
