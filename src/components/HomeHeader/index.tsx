import React from 'react';
import { View, Pressable, Image, ViewProps, ViewStyle } from 'react-native';

import Text from '../Text';
import Icon from '../Icon';
import theme from '../../constants/theme';
import styles from './styles';

export type HomeHeaderProps = ViewProps & {
  title?: string;
  color?: string;
  style?: ViewStyle;
};

const HomeHeader: React.FC<HomeHeaderProps> = ({ title, color, style }) => {
  return (
    <View style={[styles.header, style]}>
      <View style={styles.leftView}>
        <Image
          source={require('../../../assets/IW_logo.png')}
          resizeMode="contain"
          style={styles.img}
        />
      </View>
      <View style={styles.centerView}>
        {title && (
          <Text body1 bold color={color || '#FFF'} style={styles.title}>
            {title}
          </Text>
        )}
      </View>
      <View style={styles.rightView}>
        <Pressable style={styles.button}>
          <Icon
            type="Ionicons"
            name="search"
            size={theme.SIZES.ICON}
            color={color || '#FFF'}
          />
        </Pressable>
        <Pressable style={styles.button}>
          <Icon
            type="Ionicons"
            name="filter"
            size={theme.SIZES.ICON}
            color={color || '#FFF'}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default HomeHeader;
