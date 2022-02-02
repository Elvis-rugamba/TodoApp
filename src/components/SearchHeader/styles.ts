import { StyleSheet } from 'react-native';

import theme from '../../constants/theme';

const styles = StyleSheet.create({
  header: {
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.COLORS.WHITE,
    paddingHorizontal: 20,
  },
  leftView: {
    width: 30,
    height: 30,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  centerView: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    ...theme.STYLES.title,
  },
  button: {
    alignItems: 'center',
  },
  shadow: {
    shadowColor: theme.COLORS.DEFAULT,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
});

export default styles;
