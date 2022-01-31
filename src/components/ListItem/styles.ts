import { StyleSheet } from 'react-native';

import theme from '../../constants/theme';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: theme.COLORS.BACKGROUND,
    paddingBottom: 16,
    marginBottom: 16,
  },
  itemLeft: {
    marginRight: 16,
  },
  itemCenter: {
    // backgroundColor: 'blue',
  },
  itemRight: {
    marginLeft: 8,
  },
  itemRightBtn: {
    height: 'auto',
    width: 'auto',
  },
  badge: {
    marginVertical: 8,
  },
  date: {
    flex: 1,
    marginRight: 8,
  },
});

export default styles;
