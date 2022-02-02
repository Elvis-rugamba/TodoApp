import { StyleSheet } from 'react-native';

import theme from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BACKGROUND,
  },
  topView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: theme.SIZES.windowHeight * 0.3,
    backgroundColor: theme.COLORS.PRIMARY,
    zIndex: -1,
  },
  content: {
    backgroundColor: theme.COLORS.WHITE,
    marginTop: 16,
    marginHorizontal: 20,
    borderRadius: theme.SIZES.BORDER_RADIUS,
    shadowColor: theme.COLORS.DEFAULT,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  titleView: {
    padding: 16,
  },
  contentContainer: {
    paddingBottom: 76,
  },
  listItem: {
    marginHorizontal: 16,
  },
  floatButton: {
    position: 'absolute',
    right: 16,
    bottom: 20,
    height: 56,
    width: 56,
    borderRadius: 56 / 2,
  },
});

export default styles;
