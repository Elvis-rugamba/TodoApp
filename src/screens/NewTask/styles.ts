import { StyleSheet } from 'react-native';

import theme from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.WHITE,
  },
  content: {
    backgroundColor: theme.COLORS.WHITE,
  },
  titleView: {
    padding: 16,
    marginVertical: 16,
  },
  form: {
    paddingHorizontal: 20,
    paddingBottom: 36,
  },
  button: {
    width: '50%',
    marginTop: 20,
  },
});

export default styles;
