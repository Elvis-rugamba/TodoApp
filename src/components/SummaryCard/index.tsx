import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';

import Block from '../Block';
import Text from '../Text';
import theme from '../../constants/theme';

export type SummaryCardProps = {
  caption: string;
  value: number;
  style?: ViewStyle;
};

const SummaryCard: React.FC<SummaryCardProps> = ({ caption, value, style }) => {
  return (
    <Block style={[styles.card, style && style]}>
      <Text title bold color={theme.COLORS.ACCENT}>
        {value}
      </Text>
      <Text caption bold>
        {caption}
      </Text>
    </Block>
  );
};

export default SummaryCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.COLORS.WHITE,
    padding: 16,
    paddingVertical: 8,
    marginHorizontal: 8,
    shadowColor: theme.COLORS.DEFAULT,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});
