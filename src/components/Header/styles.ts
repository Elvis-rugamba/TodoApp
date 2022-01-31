import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  header: {
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: 15,
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
    fontSize: 24,
    lineHeight: 34,
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
  },
});

export default styles;
