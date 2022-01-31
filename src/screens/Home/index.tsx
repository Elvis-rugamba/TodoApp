import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { FlatList, StatusBar } from 'react-native';

import Block from '../../components/Block';
import Button from '../../components/Button';
import HomeHeader from '../../components/HomeHeader';
import ListHeader from '../../components/ListHeader';
import ListEmpty from '../../components/ListEmpty';
import ListItem from '../../components/ListItem';
import Text from '../../components/Text';
import { StackParamList } from '../../navigation/AppNavigator';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import { getActiveTodos, getDoneTodos } from '../../store/modules/todo/actions';
import {
  selectTodos,
  selectActiveTodos,
  selectDoneTodos,
} from '../../store/modules/todo/selectors';
import theme from '../../constants/theme';
import styles from './styles';

type HomeProps = {
  navigation: NativeStackScreenProps<StackParamList, 'Home'>['navigation'];
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(selectTodos);
  const activeTodos = useAppSelector(selectActiveTodos);
  const doneTodos = useAppSelector(selectDoneTodos);
  console.log(
    'todos',
    todos,
    'activeTodos',
    activeTodos,
    'doneTodos',
    doneTodos,
  );

  useEffect(() => {
    dispatch(getActiveTodos());
    dispatch(getDoneTodos());
  }, [dispatch]);

  return (
    <Block safe flex style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.COLORS.PRIMARY}
      />
      <Block style={styles.topView} />
      <HomeHeader />
      <Block flex style={styles.content}>
        <Block style={styles.titleView}>
          <Text h5 bold>
            Welcome
          </Text>
        </Block>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={todos}
          keyExtractor={item => `${item.id}`}
          contentContainerStyle={styles.contentContainer}
          ListHeaderComponent={() => (
            <ListHeader
              total={todos.length}
              active={activeTodos.length}
              done={doneTodos.length}
            />
          )}
          ListEmptyComponent={() => <ListEmpty />}
          renderItem={({ item, index }) => (
            <ListItem
              item={item}
              index={index}
              onPress={() =>
                navigation.navigate('Details', { itemId: item.id })
              }
              style={styles.listItem}
            />
          )}
        />
        <Button
          onlyIcon
          icon="add"
          style={styles.floatButton}
          onPress={() => navigation.navigate('NewTask')}
        />
      </Block>
    </Block>
  );
};

export default Home;
