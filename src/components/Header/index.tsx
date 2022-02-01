import React from 'react';
import { View, Pressable, ViewProps, ViewStyle } from 'react-native';

import Text from '../Text';
import Icon from '../Icon';
import theme from '../../constants/theme';
import styles from './styles';

export type HeaderProps = ViewProps & {
  leftHandler?: () => void;
  leftIcon?: string;
  title?: string;
  color?: string;
  style?: ViewStyle;
};

const Header: React.FC<HeaderProps> = ({
  leftHandler,
  leftIcon,
  title,
  color,
  style,
}) => {
  return (
    <View style={[styles.header, style]}>
      <View style={styles.leftView}>
        {leftHandler && (
          <Pressable style={styles.button} onPress={leftHandler}>
            <Icon
              type="Ionicons"
              name={leftIcon || 'arrow-back'}
              size={theme.SIZES.ICON}
              color={color || theme.COLORS.DEFAULT}
            />
          </Pressable>
        )}
      </View>
      <View style={styles.centerView}>
        {title && (
          <Text title bold color={color || '#FFF'} style={styles.title}>
            {title}
          </Text>
        )}
      </View>
    </View>
  );
};

export default Header;
