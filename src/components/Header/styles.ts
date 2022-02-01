import { StyleSheet } from 'react-native';

import theme from '../../constants/theme';

const styles = StyleSheet.create({
  header: {
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.COLORS.WHITE,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  leftView: {
    width: 30,
    height: 30,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  centerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightView: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...theme.STYLES.title,
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
  },
});

export default styles;
