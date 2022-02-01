import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TextStyle,
  ViewStyle,
  TextInputProps,
  ViewProps,
  KeyboardTypeOptions,
} from 'react-native';
import { Picker, PickerProps } from '@react-native-picker/picker';

import Text from '../Text';

import theme from '../../constants/theme';

export type InputProps = TextInputProps &
  PickerProps &
  ViewProps & {
    label: string;
    placeholder?: string;
    placeholderTextColor?: string;
    type?: KeyboardTypeOptions;
    color?: string;
    bgColor?: string;
    error?: string;
    password?: boolean;
    multiline?: boolean;
    dropdown?: boolean;
    width?: number | string;
    height?: number | string;
    textStyles?: TextStyle;
    labelStyles?: TextStyle;
    style?: ViewStyle;
  };

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  placeholderTextColor,
  type,
  color,
  bgColor,
  error,
  password,
  multiline,
  dropdown,
  width,
  height,
  children,
  textStyles,
  labelStyles,
  style,
  ...rest
}) => {
  const [isPassword, setIsPassword] = useState(false);
  useEffect(() => {
    setIsPassword(password || false);
  }, [password]);

  const inputViewStyles: ViewStyle[] | any = [
    styles.inputStyle,
    styles.inputContainer,
    width && { width },
    height && { height },
    bgColor && { backgroundColor: bgColor },
    error && { borderColor: theme.COLORS.ERROR },
    style,
  ];

  const inputStyles: ViewStyle[] | any = [
    styles.inputView,
    styles.inputText,
    color && { color },
    textStyles,
  ];

  const pickerStyles: ViewStyle[] | any = [
    styles.pickerView,
    styles.inputText,
    color && { color },
    textStyles,
  ];

  const lebelContent = label && (
    <Text body1 bold style={[styles.label, labelStyles]}>
      {label}
    </Text>
  );

  const errorContent = error && <Text style={styles.errorText}>{error}</Text>;

  return (
    <View style={styles.item}>
      {lebelContent}
      <View style={inputViewStyles}>
        {dropdown ? (
          <Picker
            mode="dropdown"
            style={pickerStyles}
            dropdownIconColor={color || theme.COLORS.DEFAULT}
            {...rest}>
            {children}
          </Picker>
        ) : (
          <TextInput
            style={inputStyles}
            keyboardType={type}
            secureTextEntry={isPassword}
            multiline={multiline}
            placeholder={placeholder}
            placeholderTextColor={
              placeholderTextColor || theme.COLORS.SECONDARY
            }
            selectionColor={theme.COLORS.PRIMARY}
            underlineColorAndroid="transparent"
            {...rest}
          />
        )}
      </View>
      {error && errorContent}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginVertical: theme.SIZES.BASE / 2,
    alignContent: 'center',
  },
  inputStyle: {
    height: 45,
    width: '100%',
    backgroundColor: theme.COLORS.BACKGROUND,
    paddingHorizontal: theme.SIZES.INPUT_HORIZONTAL,
    borderRadius: theme.SIZES.BORDER_RADIUS,
    borderWidth: 1,
    borderColor: theme.COLORS.BACKGROUND,
  },
  inputText: {
    color: theme.COLORS.DEFAULT,
    fontSize: theme.SIZES.BODY_2,
    textDecorationColor: 'transparent',
    textShadowColor: 'transparent',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  inputView: {
    flex: 1,
  },
  pickerView: {
    flex: 1,
    width: '100%',
    marginHorizontal: -12,
    marginTop: -6,
  },
  inputIcon: {
    marginHorizontal: theme.SIZES.BASE,
  },
  label: {
    fontSize: theme.SIZES.BODY_1,
    marginBottom: 8,
  },
  errorText: {
    ...theme.STYLES.caption,
    color: theme.COLORS.ERROR,
  },
});

export default Input;
