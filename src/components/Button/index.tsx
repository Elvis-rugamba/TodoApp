import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacityProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

import Icon, { IconProps } from '../Icon';

import theme from '../../constants/theme';

export type ButtonProps = TouchableOpacityProps & {
  color?: string;
  disabled?: boolean;
  icon?: string;
  iconSize?: number;
  iconType?: IconProps['type'];
  iconColor?: string;
  onlyIcon?: boolean;
  loading?: boolean;
  loadingSize?: 'small' | 'large';
  loadingColor?: string;
  opacity?: number;
  round?: boolean;
  radius?: number;
  noShadow?: boolean;
  primary?: boolean;
  secondary?: boolean;
  inverse?: boolean;
  transparent?: boolean;
  info?: boolean;
  error?: boolean;
  warning?: boolean;
  success?: boolean;
  textStyle?: TextStyle;
  iconStyle?: TextStyle;
  style?: ViewStyle;
};

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  disabled,
  iconSize,
  icon,
  iconType,
  iconColor,
  loading,
  loadingSize,
  loadingColor,
  onlyIcon,
  opacity,
  round,
  radius,
  noShadow,
  primary,
  secondary,
  inverse,
  transparent,
  info,
  error,
  warning,
  success,
  textStyle,
  iconStyle,
  style,
  ...rest
}) => {
  const renderContent = () => {
    const textStyles = [styles.customText, textStyle];

    let content = children;
    const isString = children && typeof children === 'string';

    if (onlyIcon) {
      content = (
        <Icon
          type={iconType || 'Ionicons'}
          name={icon || ''}
          size={iconSize || theme.SIZES.ICON}
          color={iconColor || theme.COLORS.WHITE}
          style={iconStyle}
        />
      );
    } else if (isString) {
      content = <Text style={textStyles}>{content}</Text>;
    }

    if (loading) {
      content = (
        <ActivityIndicator
          size={loadingSize}
          color={loadingColor || theme.COLORS.WHITE}
        />
      );
    }

    return content;
  };

  const buttonStyles: ViewStyle | any = [
    styles.defaultButton,
    color && { backgroundColor: color },
    round && styles.round,
    radius && { borderRadius: radius },
    !noShadow && styles.shadow,
    primary && styles.primary,
    secondary && styles.secondary,
    inverse && styles.inverse,
    transparent && styles.transparent,
    info && styles.info,
    error && styles.error,
    warning && styles.warning,
    success && styles.success,
    onlyIcon && { borderWidth: 0 },
    style,
  ];

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={opacity || 0.8}
      style={buttonStyles}
      {...rest}>
      {renderContent()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  defaultButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: theme.SIZES.BORDER_RADIUS,
    backgroundColor: theme.COLORS.DEFAULT,
  },
  customText: {
    ...theme.STYLES.button,
    color: theme.COLORS.WHITE,
  },
  shadow: {
    shadowColor: theme.COLORS.DEFAULT,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 2,
  },
  round: {
    borderRadius: 48 / 2,
  },
  primary: {
    backgroundColor: theme.COLORS.PRIMARY,
  },
  secondary: {
    backgroundColor: theme.COLORS.SECONDARY,
  },
  inverse: {
    backgroundColor: theme.COLORS.WHITE,
    borderWidth: 1,
    borderColor: theme.COLORS.PRIMARY,
  },
  info: {
    backgroundColor: theme.COLORS.INFO,
  },
  error: {
    backgroundColor: theme.COLORS.ERROR,
  },
  warning: {
    backgroundColor: theme.COLORS.WARNING,
  },
  success: {
    backgroundColor: theme.COLORS.SUCCESS,
  },
  transparent: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    borderWidth: 0,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
});

export default Button;
