import { StyleSheet } from 'react-native';

import theme from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.WHITE,
  },
  content: {
    backgroundColor: theme.COLORS.WHITE,
  },
  contentContainer: {
    paddingVertical: 20,
  },
  listItem: {
    marginHorizontal: 16,
  },
});

export default styles;
