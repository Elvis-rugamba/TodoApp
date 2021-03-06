import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';
import moment from 'moment';

import Block from '../Block';
import Text from '../Text';
import Button from '../Button';
import Icon from '../Icon';
import theme from '../../constants/theme';
import styles from './styles';
import Badge from '../Badge';

export type ListItemProps = {
  item: Todo;
  index: number;
  onPress: () => void;
  style?: ViewStyle;
};

const ListItem: React.FC<ListItemProps> = ({ item, index, onPress, style }) => {
  const { title, priority, createdDate, modifiedDate, done } = item;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.item, done && styles.overlay, style && style]}
      onPress={onPress}>
      <Block style={styles.itemLeft}>
        <Icon
          type="Ionicons"
          name={done ? 'checkbox' : 'checkbox-outline'}
          size={28}
        />
      </Block>
      <Block flex style={styles.itemCenter}>
        <Text body1 bold>
          {index + 1} {title}
        </Text>
        <Block style={styles.badge}>
          <Badge title={priority} type={priority} />
        </Block>
        <Block row>
          <Text
            overline
            bold
            color={theme.COLORS.SECONDARY}
            numberOfLines={1}
            style={styles.date}>
            Created {moment(createdDate).format('DD MMM YYYY')}
          </Text>
          <Text
            overline
            bold
            color={theme.COLORS.SECONDARY}
            numberOfLines={1}
            style={styles.date}>
            Modified {moment(modifiedDate).format('DD MMM YYYY')}
          </Text>
        </Block>
      </Block>
      <Block style={styles.itemRight}>
        <Button
          transparent
          onlyIcon
          icon="ellipsis-vertical"
          iconSize={16}
          iconColor={theme.COLORS.DEFAULT}
          style={styles.itemRightBtn}
        />
      </Block>
    </TouchableOpacity>
  );
};

export default ListItem;
