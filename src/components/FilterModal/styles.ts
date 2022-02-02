import { StyleSheet } from 'react-native';

import theme from '../../constants/theme';

const styles = StyleSheet.create({
  backDrop: {
    flex: 1,
    alignItems: 'flex-end',
  },
  modalView: {
    backgroundColor: theme.COLORS.WHITE,
    marginHorizontal: 20,
    marginTop: 55,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: theme.COLORS.BACKGROUND,
    shadowColor: theme.COLORS.DEFAULT,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },
  titleView: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme.COLORS.BACKGROUND,
  },
  content: {
    paddingTop: 8,
    paddingBottom: 16,
  },
  button: {
    justifyContent: 'center',
    height: 36,
    paddingHorizontal: 16,
  },
});

export default styles;
