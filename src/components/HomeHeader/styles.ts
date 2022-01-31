import { StyleSheet } from 'react-native';

import theme from '../../constants/theme';

const styles = StyleSheet.create({
  header: {
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.COLORS.PRIMARY,
    paddingHorizontal: 20,
  },
  leftView: {
    width: 32,
    height: 32,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  centerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 24,
    lineHeight: 34,
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    marginLeft: 20,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
