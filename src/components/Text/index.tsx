import React from 'react';
import { Text as RNText, StyleSheet, TextProps, TextStyle } from 'react-native';

import theme from '../../constants/theme';

export type TypographyProps = TextProps & {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  title?: boolean;
  subtitle1?: boolean;
  subtitle2?: boolean;
  body1?: boolean;
  body2?: boolean;
  button?: boolean;
  caption?: boolean;
  overline?: boolean;
  size?: number;
  color?: string;
  bold?: boolean;
  center?: boolean;
  style?: TextStyle;
};

const Text: React.FC<TypographyProps> = ({
  h1,
  h2,
  h3,
  h4,
  h5,
  title,
  subtitle1,
  subtitle2,
  body1,
  body2,
  button,
  caption,
  overline,
  size,
  color,
  bold,
  center,
  style,
  children,
  ...rest
}) => {
  const textStyle: TextStyle | any = [
    styles.default,
    h1 && styles.h1,
    h2 && styles.h2,
    h3 && styles.h3,
    h4 && styles.h4,
    h5 && styles.h5,
    title && styles.title,
    subtitle1 && styles.subtitle1,
    subtitle2 && styles.subtitle2,
    body1 && styles.body1,
    body2 && styles.body2,
    button && styles.button,
    caption && styles.caption,
    overline && styles.overline,
    size && { fontSize: size },
    color && { color },
    bold && styles.bold,
    center && styles.center,
    style && style,
  ];
  return (
    <RNText style={textStyle} {...rest}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  default: {
    fontFamily: theme.FONTS.REGULAR,
    fontSize: theme.SIZES.FONT,
    color: theme.COLORS.DEFAULT,
  },
  h1: { ...theme.STYLES.h1 },
  h2: { ...theme.STYLES.h2 },
  h3: { ...theme.STYLES.h3 },
  h4: { ...theme.STYLES.h4 },
  h5: { ...theme.STYLES.h5 },
  title: { ...theme.STYLES.title },
  subtitle1: { ...theme.STYLES.subtitle1 },
  subtitle2: { ...theme.STYLES.subtitle2 },
  body1: { ...theme.STYLES.body1 },
  body2: { ...theme.STYLES.body2 },
  button: { ...theme.STYLES.button },
  caption: { ...theme.STYLES.caption },
  overline: { ...theme.STYLES.overline },
  bold: { fontFamily: theme.FONTS.BOLD },
  center: { textAlign: 'center' },
});

export default Text;
