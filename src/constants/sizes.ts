import { Dimensions } from 'react-native';

const { height: windowHeight, width: windowWidth } = Dimensions.get('screen');

type Sizes =
  | 'BASE'
  | 'FONT'
  | 'ICON'
  | 'BORDER_RADIUS'
  | 'windowHeight'
  | 'windowWidth'

  // Input
  | 'INPUT_HORIZONTAL'

  // Typography
  | 'H1'
  | 'H2'
  | 'H3'
  | 'H4'
  | 'H5'
  | 'TITLE'
  | 'SUBTITLE_1'
  | 'SUBTITLE_2'
  | 'BODY_1'
  | 'BODY_2'
  | 'BUTTON'
  | 'CAPTION'
  | 'OVERLINE';

const SIZES: Record<Sizes, number> = {
  BASE: 16,
  FONT: 16,
  ICON: 24,
  BORDER_RADIUS: 4,
  windowHeight,
  windowWidth,

  // Input
  INPUT_HORIZONTAL: 8,

  // Typography
  H1: 94,
  H2: 60,
  H3: 48,
  H4: 34,
  H5: 24,
  TITLE: 20,
  SUBTITLE_1: 16,
  SUBTITLE_2: 14,
  BODY_1: 16,
  BODY_2: 14,
  BUTTON: 14,
  CAPTION: 12,
  OVERLINE: 10,
};

export default SIZES;
