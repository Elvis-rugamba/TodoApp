import { StyleSheet } from 'react-native';

import theme from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.WHITE,
  },
  content: {
    backgroundColor: theme.COLORS.WHITE,
  },
  imageView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: theme.SIZES.windowHeight * 0.3,
    backgroundColor: theme.COLORS.BACKGROUND,
    marginBottom: 16,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  actionsView: {
    padding: 20,
  },
  action: {
    height: 36,
    width: 36,
    backgroundColor: theme.COLORS.BACKGROUND,
    marginLeft: 8,
  },
  doneButton: {
    height: 36,
    width: 100,
    marginLeft: 8,
  },
  itemView: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  date: {
    marginRight: 8,
  },
});

export default styles;
