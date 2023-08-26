import {
  BackWrapper,
  Button,
  CButton,
  Circle,
  CSelect,
  SelectItem,
  ThemeWrapper,
  Wrapper,
} from './styled';
import {
  MobileChevronMajor,
  DesktopMajor,
  MobileMajor,
} from '@shopify/polaris-icons';

const ThemeDesktop = () => {
  const handleChange = () => {};

  return (
    <Wrapper>
      <BackWrapper>
        <MobileChevronMajor width={30} height={30}></MobileChevronMajor>
        <p>Back</p>
      </BackWrapper>
      <ThemeWrapper>
        <p>Theme styles</p>
        <CSelect
          defaultValue="sound"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            {
              value: 'sound',
              label: (
                <SelectItem>
                  <Circle color={'#778667'}></Circle> Sound
                </SelectItem>
              ),
            },
            {
              value: 'home',
              label: (
                <SelectItem>
                  <Circle color={'#97B0D8'} />
                  Home
                </SelectItem>
              ),
            },
            {
              value: 'shape',
              label: (
                <SelectItem>
                  <Circle color={'#D9967E'} />
                  Shape
                </SelectItem>
              ),
            },
          ]}
        />
        <Button>
          <DesktopMajor width={30} height={30}></DesktopMajor>
        </Button>
        <Button>
          <MobileMajor width={30} height={30}></MobileMajor>
        </Button>
      </ThemeWrapper>
      <CButton>Try theme</CButton>
    </Wrapper>
  );
};

export default ThemeDesktop;
