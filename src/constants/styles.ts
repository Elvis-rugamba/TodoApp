import { TextStyle, ViewStyle } from 'react-native';
import SIZES from './sizes';

interface Styles {
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  h4: TextStyle;
  h5: TextStyle;
  title: TextStyle;
  subtitle1: TextStyle;
  subtitle2: TextStyle;
  body1: TextStyle;
  body2: TextStyle;
  button: TextStyle;
  caption: TextStyle;
  overline: TextStyle;
  flex: ViewStyle;
  block: ViewStyle;
  row: ViewStyle;
  middle: ViewStyle;
  center: ViewStyle;
  left: ViewStyle;
  right: ViewStyle;
  top: ViewStyle;
  bottom: ViewStyle;
  fluid: ViewStyle;
}

const STYLES: Styles = {
  h1: {
    fontSize: SIZES.H1,
    letterSpacing: -1.5,
  },
  h2: {
    fontSize: SIZES.H2,
    letterSpacing: -0.5,
  },
  h3: {
    fontSize: SIZES.H3,
  },
  h4: {
    fontSize: SIZES.H4,
    letterSpacing: 0.25,
  },
  h5: {
    fontSize: SIZES.H5,
  },
  title: {
    fontSize: SIZES.TITLE,
    letterSpacing: 0.15,
  },
  subtitle1: {
    fontSize: SIZES.SUBTITLE_1,
    letterSpacing: 0.15,
    lineHeight: 24,
  },
  subtitle2: {
    fontSize: SIZES.SUBTITLE_2,
    letterSpacing: 0.1,
    lineHeight: 24,
  },
  body1: {
    fontSize: SIZES.BODY_1,
    letterSpacing: 0.44,
    lineHeight: 28,
  },
  body2: {
    fontSize: SIZES.BODY_2,
    letterSpacing: 0.25,
    lineHeight: 20,
  },
  button: {
    fontSize: SIZES.BUTTON,
    letterSpacing: 1.35,
    textTransform: 'uppercase',
  },
  caption: {
    fontSize: SIZES.CAPTION,
    letterSpacing: 0.4,
    lineHeight: 16,
  },
  overline: {
    fontSize: SIZES.OVERLINE,
    letterSpacing: 1.5,
    lineHeight: 16,
  },
  flex: {
    flex: 1,
  },
  block: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  middle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  left: {
    alignItems: 'flex-start',
  },
  right: {
    alignItems: 'flex-end',
  },
  top: {
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  },
  bottom: {
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
  fluid: {
    width: 'auto',
  },
};

export default STYLES;
