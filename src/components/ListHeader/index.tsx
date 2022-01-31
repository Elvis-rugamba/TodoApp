import React from 'react';
import { StyleSheet } from 'react-native';

import Block from '../Block';
import SummaryCard from '../SummaryCard';
import theme from '../../constants/theme';

export type ListHeaderProps = {
  total: number;
  active: number;
  done: number;
};

const ListHeader: React.FC<ListHeaderProps> = ({ total, active, done }) => {
  return (
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
});
