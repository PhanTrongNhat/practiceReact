import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import CollectionDesktop from './CollectionDesktop';
import CollectionMobile from './CollectionMobile';
import React from 'react';

export type CollectionType = {
  offsetWidthScroll: number;
  offsetWidth: number;
  scrollLeft: number;
  handleChangeLeft: () => void;
  handleChangeRight: () => void;
};

const CollectionSection = () => {
  const appDevice = useAppSelector(selectAppDevice);
  const collection = window.document.getElementById('collection-wrapper');
  const [offsetWidthScroll, setOffsetWidthScroll] = React.useState(0);
  const [offsetWidth, setOffsetWidth] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);

  const handleChangeLeft = () => {
    if (collection && collection.scrollLeft > 0) {
      collection.scrollLeft -= 500;
      setScrollLeft(collection.scrollLeft - 500);
    } else {
      setScrollLeft(0);
    }
  };

  const handleChangeRight = () => {
    const collection = window.document.getElementById('collection-wrapper');

    if (collection) {
      collection.scrollLeft += 500;
      setScrollLeft(collection.scrollLeft + 500);
    }
  };

  React.useEffect(() => {
    const collection = window.document.getElementById('collection-wrapper');

    if (collection) {
      setOffsetWidth(collection.offsetWidth);
      setOffsetWidthScroll(collection.scrollWidth);
    }
  }, []);

  const renderElement = {
    [DEVICES.DESKTOP]: (
      <CollectionDesktop
        handleChangeRight={handleChangeRight}
        handleChangeLeft={handleChangeLeft}
        scrollLeft={scrollLeft}
        offsetWidthScroll={offsetWidthScroll}
        offsetWidth={offsetWidth}
      ></CollectionDesktop>
    ),
    [DEVICES.TABLET]: (
      <CollectionMobile
        handleChangeRight={handleChangeRight}
        handleChangeLeft={handleChangeLeft}
        scrollLeft={scrollLeft}
        offsetWidthScroll={offsetWidthScroll}
        offsetWidth={offsetWidth}
      ></CollectionMobile>
    ),
    [DEVICES.MOBILE]: (
      <CollectionMobile
        handleChangeRight={handleChangeRight}
        handleChangeLeft={handleChangeLeft}
        scrollLeft={scrollLeft}
        offsetWidthScroll={offsetWidthScroll}
        offsetWidth={offsetWidth}
      ></CollectionMobile>
    ),
  };
  return renderElement[appDevice.device];
};

export default CollectionSection;
