import React from 'react';
import { View, StyleSheet, ViewProps, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import theme from '../../constants/theme';

export type BlockProps = ViewProps & {
  flex?: boolean | number;
  row?: boolean;
  center?: boolean;
  middle?: boolean;
  top?: boolean;
  bottom?: boolean;
  right?: boolean;
  left?: boolean;
  space?: string;
  fluid?: boolean;
  height?: number;
  width?: number;
  safe?: boolean;
  style?: ViewStyle;
};

const Block: React.FC<BlockProps> = ({
  row,
  flex,
  center,
  middle,
  top,
  bottom,
  right,
  left,
  space,
  fluid,
  height,
  width,
  safe,
  children,
  style,
  ...rest
}) => {
  const blockStyle: ViewStyle | any = [
    styles.default,
    row && styles.row,
    flex && { flex: flex === true ? 1 : flex },
    center && styles.center,
    middle && styles.middle,
    top && styles.top,
    bottom && styles.bottom,
    right && styles.right,
    left && styles.left,
    space && { justifyContent: `space-${space}` },
    fluid && styles.fluid,
    height && { height },
    width && { width },
    style,
  ];

  if (safe) {
    return (
      <SafeAreaView style={blockStyle} {...rest}>
        {children}
      </SafeAreaView>
    );
  }

  return (
    <View style={blockStyle} {...rest}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    ...theme.STYLES.block,
  },
  row: {
    ...theme.STYLES.row,
  },
  middle: {
    ...theme.STYLES.middle,
  },
  center: {
    ...theme.STYLES.center,
  },
  left: {
    ...theme.STYLES.left,
  },
  right: {
    ...theme.STYLES.right,
  },
  top: {
    ...theme.STYLES.top,
  },
  bottom: {
    ...theme.STYLES.bottom,
  },
  fluid: {
    ...theme.STYLES.fluid,
  },
});

export default Block;
