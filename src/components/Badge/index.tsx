import React from 'react';
import { StyleSheet } from 'react-native';

import Block from '../Block';
import Text from '../Text';
import theme from '../../constants/theme';
import { Priority } from '../../types';

export type BadgeProps = {
  title: string;
  type: Priority;
};

const Badge: React.FC<BadgeProps> = ({ title, type }) => {
  let bg = theme.COLORS.SECONDARY;
  let color = theme.COLORS.WHITE;

  switch (type) {
    case 'Low':
      bg = theme.COLORS.BACKGROUND;
      color = theme.COLORS.SECONDARY;
      break;

    case 'Medium':
      bg = theme.COLORS.SECONDARY;
      color = theme.COLORS.WHITE;
      break;

    case 'High':
      bg = theme.COLORS.DEFAULT;
      color = theme.COLORS.ACCENT;
      break;

    default:
      bg = theme.COLORS.SECONDARY;
      color = theme.COLORS.WHITE;
      break;
  }

  return (
    <Block middle style={[styles.badge, { backgroundColor: bg }]}>
      <Text caption bold color={color}>
        {title}
      </Text>
    </Block>
  );
};

export default Badge;

const styles = StyleSheet.create({
  badge: {
    backgroundColor: theme.COLORS.SECONDARY,
    width: 100,
    padding: 4,
    borderRadius: 16,
  },
});
