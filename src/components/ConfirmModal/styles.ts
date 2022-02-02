import { StyleSheet } from 'react-native';

import theme from '../../constants/theme';

const styles = StyleSheet.create({
  backDrop: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalView: {
    backgroundColor: theme.COLORS.WHITE,
    margin: 8,
    padding: 8,
    borderRadius: 8,
  },
  cardItem: {
    padding: 8,
  },
  buttons: {
    paddingVertical: 8,
  },
  button: {
    height: 48,
    marginHorizontal: 4,
  },
  buttonText: {
    color: theme.COLORS.WHITE,
    fontWeight: '700',
  },
  marginTop: {
    marginTop: 8,
  },
  marginBottom: {
    marginBottom: 8,
  },
});

export default styles;
