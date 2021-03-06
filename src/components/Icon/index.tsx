import React from 'react';
import { TextProps, TextStyle } from 'react-native';

import theme from '../../constants/theme';

export interface IconPropsBase extends TextProps {
  type: string;
  name: string;
  size?: number;
  color?: string;
  onPress?: () => void;
  style?: TextStyle;
}

interface AntDesignProps extends IconPropsBase {
  type: 'AntDesign';
}
interface MaterialIconsProps extends IconPropsBase {
  type: 'MaterialIcons';
}
interface EvilIconsProps extends IconPropsBase {
  type: 'EvilIcons';
}
interface EntypoProps extends IconPropsBase {
  type: 'Entypo';
}
interface FontAwesomeProps extends IconPropsBase {
  type: 'FontAwesome';
}
interface FoundationProps extends IconPropsBase {
  type: 'Foundation';
}
interface IoniconsProps extends IconPropsBase {
  type: 'Ionicons';
}
interface MaterialCommunityIconsProps extends IconPropsBase {
  type: 'MaterialCommunityIcons';
}
interface ZocialProps extends IconPropsBase {
  type: 'Zocial';
}
interface OcticonsProps extends IconPropsBase {
  type: 'Octicons';
}
interface SimpleLineIconsProps extends IconPropsBase {
  type: 'SimpleLineIcons';
}
interface FontistoProps extends IconPropsBase {
  type: 'Fontisto';
}
interface FeatherProps extends IconPropsBase {
  type: 'Feather';
}

export type IconProps =
  | AntDesignProps
  | MaterialIconsProps
  | EvilIconsProps
  | EntypoProps
  | FontAwesomeProps
  | FoundationProps
  | IoniconsProps
  | MaterialCommunityIconsProps
  | ZocialProps
  | OcticonsProps
  | SimpleLineIconsProps
  | FontistoProps
  | FeatherProps;

const Icon: React.FC<IconProps> = ({
  type,
  name,
  color = theme.COLORS.DEFAULT,
  size = theme.SIZES.ICON,
  style = {},
  ...textProps
}) => {
  switch (type) {
    case 'AntDesign': {
      const AntDesign = require('react-native-vector-icons/AntDesign').default;
      return (
        <AntDesign
          {...textProps}
          name={name}
          size={size}
          color={color}
          style={style}
        />
      );
    }
    case 'Entypo': {
      const Entypo = require('react-native-vector-icons/Entypo').default;
      return (
        <Entypo
          {...textProps}
          name={name}
          size={size}
          color={color}
          style={style}
        />
      );
    }
    case 'Ionicons': {
      const Ionicons = require('react-native-vector-icons/Ionicons').default;
      return (
        <Ionicons
          {...textProps}
          name={name}
          size={size}
          color={color}
          style={style}
        />
      );
    }
    case 'SimpleLineIcons': {
      const SimpleLineIcons =
        require('react-native-vector-icons/SimpleLineIcons').default;
      return (
        <SimpleLineIcons
          {...textProps}
          name={name}
          size={size}
          color={color}
          style={style}
        />
      );
    }
    case 'EvilIcons': {
      const EvilIcons = require('react-native-vector-icons/EvilIcons').default;
      return (
        <EvilIcons
          {...textProps}
          name={name}
          size={size}
          color={color}
          style={style}
        />
      );
    }
    case 'MaterialIcons': {
      const MaterialIcons =
        require('react-native-vector-icons/MaterialIcons').default;
      return (
        <MaterialIcons
          {...textProps}
          name={name}
          size={size}
          color={color}
          style={style}
        />
      );
    }
    case 'FontAwesome': {
      const FontAwesome =
        require('react-native-vector-icons/FontAwesome').default;
      return (
        <FontAwesome
          {...textProps}
          name={name}
          size={size}
          color={color}
          style={style}
        />
      );
    }
    case 'Foundation': {
      const Foundation =
        require('react-native-vector-icons/Foundation').default;
      return (
        <Foundation
          {...textProps}
          name={name}
          size={size}
          color={color}
          style={style}
        />
      );
    }
    case 'MaterialCommunityIcons': {
      const MaterialCommunityIcons =
        require('react-native-vector-icons/MaterialCommunityIcons').default;
      return (
        <MaterialCommunityIcons
          {...textProps}
          name={name}
          size={size}
          color={color}
          style={style}
        />
      );
    }
    case 'Zocial': {
      const Zocial = require('react-native-vector-icons/Zocial').default;
      return (
        <Zocial
          {...textProps}
          name={name}
          size={size}
          color={color}
          style={style}
        />
      );
    }
    case 'Octicons': {
      const Octicons = require('react-native-vector-icons/Octicons').default;
      return (
        <Octicons
          {...textProps}
          name={name}
          size={size}
          color={color}
          style={style}
        />
      );
    }
    case 'Fontisto': {
      const Fontisto = require('react-native-vector-icons/Fontisto').default;
      return (
        <Fontisto
          {...textProps}
          name={name}
          size={size}
          color={color}
          style={style}
        />
      );
    }
    case 'Feather': {
      const Feather = require('react-native-vector-icons/Feather').default;
      return (
        <Feather
          {...textProps}
          name={name}
          size={size}
          color={color}
          style={style}
        />
      );
    }
    default: {
      const Ionicons = require('react-native-vector-icons/Ionicons').default;
      return (
        <Ionicons
          {...textProps}
          name={name}
          size={size}
          color={color}
          style={style}
        />
      );
    }
  }
};

export default Icon;
