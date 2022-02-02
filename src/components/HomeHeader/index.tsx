import React, { useState } from 'react';
import { View, Pressable, Image, ViewProps, ViewStyle } from 'react-native';

import Text from '../Text';
import Icon from '../Icon';
import theme from '../../constants/theme';
import styles from './styles';
import FilterModal from '../FilterModal';

export type HomeHeaderProps = ViewProps & {
  title?: string;
  color?: string;
  onPressSearch: () => void;
  onFilter: (option: 'Low' | 'Medium' | 'High') => void;
  style?: ViewStyle;
};

const HomeHeader: React.FC<HomeHeaderProps> = ({
  title,
  color,
  onPressSearch,
  onFilter,
  style,
}) => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  /**
   * Select option
   * @param option
   */
  const onSelectOption = (option: 'Low' | 'Medium' | 'High') => {
    onFilter(option);
  };

  return (
    <>
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
          <Pressable style={styles.button} onPress={onPressSearch}>
            <Icon
              type="Ionicons"
              name="search"
              size={theme.SIZES.ICON}
              color={color || '#FFF'}
            />
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => setShowFilterModal(true)}>
            <Icon
              type="Ionicons"
              name="filter"
              size={theme.SIZES.ICON}
              color={color || '#FFF'}
            />
          </Pressable>
        </View>
      </View>
      {showFilterModal ? (
        <FilterModal
          visible={true}
          close={() => setShowFilterModal(false)}
          onSelectOption={onSelectOption}
        />
      ) : null}
    </>
  );
};

export default HomeHeader;
