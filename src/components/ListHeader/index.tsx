import React from 'react';
import { StyleSheet } from 'react-native';

import Block from '../Block';
import Text from '../Text';
import Button from '../Button';
import SummaryCard from '../SummaryCard';
import theme from '../../constants/theme';

export type ListHeaderProps = {
  total: number;
  active: number;
  done: number;
  filter?: string | null;
  clearFilter?: () => void;
};

const ListHeader: React.FC<ListHeaderProps> = ({
  total,
  active,
  done,
  filter,
  clearFilter,
}) => {
  return (
    <Block>
      <Block row style={styles.summaryView}>
        <SummaryCard
          caption="Total Tasks"
          value={total}
          style={styles.summaryItem}
        />
        <SummaryCard
          caption="Active Tasks"
          value={active}
          style={styles.summaryItem}
        />
        <SummaryCard
          caption="Tasks Done"
          value={done}
          style={styles.summaryItem}
        />
      </Block>
      {filter ? (
        <Block row center style={styles.filterView}>
          <Text body1 bold>
            Filter By:{' '}
          </Text>
          <Block row center style={styles.filter}>
            <Text
              body2
              color={theme.COLORS.SECONDARY}
              style={styles.filterText}>
              {filter}
            </Text>
            <Button
              transparent
              onlyIcon
              icon="close"
              iconSize={20}
              iconColor={theme.COLORS.SECONDARY}
              style={styles.clear}
              onPress={clearFilter}
            />
          </Block>
        </Block>
      ) : null}
    </Block>
  );
};

export default ListHeader;

const styles = StyleSheet.create({
  summaryView: {
    padding: 16,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  summaryItem: {
    width: (theme.SIZES.windowWidth - 64 - 40) / 3,
  },
  filterView: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  filter: {
    backgroundColor: theme.COLORS.BACKGROUND,
    borderRadius: 4,
  },
  filterText: {
    marginHorizontal: 8,
  },
  clear: {
    height: 28,
    width: 28,
  },
});
