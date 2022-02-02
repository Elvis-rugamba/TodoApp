import React from 'react';
import {
  View,
  Pressable,
  ViewProps,
  ViewStyle,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';

import Input from '../Input';
import Icon from '../Icon';
import theme from '../../constants/theme';
import styles from './styles';

export type SearchHeaderProps = ViewProps & {
  text: string;
  onChange: (text: string) => void;
  onSearch: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
  leftHandler?: () => void;
  leftIcon?: string;
  color?: string;
  noShadow?: boolean;
  style?: ViewStyle;
};

const SearchHeader: React.FC<SearchHeaderProps> = ({
  text,
  onChange,
  onSearch,
  leftHandler,
  leftIcon,
  color,
  noShadow,
  style,
}) => {
  return (
    <View style={[styles.header, !noShadow && styles.shadow, style]}>
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
        <Input
          returnKeyType="search"
          placeholder="Search Tasks"
          autoFocus
          value={text}
          onChangeText={onChange}
          onSubmitEditing={onSearch}
        />
      </View>
    </View>
  );
};

export default SearchHeader;
