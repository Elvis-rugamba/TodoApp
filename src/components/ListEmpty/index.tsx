import React from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import Block from '../Block';
import Text from '../Text';
import Button from '../Button';
import theme from '../../constants/theme';
import { StackParamList } from '../../navigation/AppNavigator';

type NavigationProp = NativeStackScreenProps<
  StackParamList,
  'Home'
>['navigation'];

export type ListEmptyProps = {
  title: string;
  description: string;
  action: boolean;
};

const ListEmpty: React.FC<ListEmptyProps> = ({
  title,
  description,
  action,
}) => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <Block flex middle style={styles.container}>
      <Text body1 bold>
        {title}
      </Text>
      <Text body2 bold color={theme.COLORS.SECONDARY}>
        {description}
      </Text>
      {action ? (
        <Button
          style={styles.button}
          onPress={() => navigation.navigate('NewTask')}>
          Start With a New Task
        </Button>
      ) : null}
    </Block>
  );
};

export default ListEmpty;

const styles = StyleSheet.create({
  container: {
    paddingVertical: '20%',
  },
  button: {
    marginTop: 20,
    width: '80%',
  },
});
