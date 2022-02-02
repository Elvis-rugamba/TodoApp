import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { StackParamList } from '../../navigation/AppNavigator';
import Block from '../../components/Block';
import Button from '../../components/Button';
import HomeHeader from '../../components/HomeHeader';
import ListHeader from '../../components/ListHeader';
import ListEmpty from '../../components/ListEmpty';
import ListItem from '../../components/ListItem';
import Text from '../../components/Text';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import {
  getAllTodos,
  getActiveTodos,
  getDoneTodos,
  filterTodos,
} from '../../store/modules/todo/actions';
import {
  selectCountTodos,
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
  const [filter, setFilter] = useState<'Low' | 'Medium' | 'High' | null>(null);

  const dispatch = useAppDispatch();
  const totalTodos = useAppSelector(selectCountTodos);
  const todos = useAppSelector(selectTodos);
  const activeTodos = useAppSelector(selectActiveTodos);
  const doneTodos = useAppSelector(selectDoneTodos);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(getAllTodos());
      dispatch(getActiveTodos());
      dispatch(getDoneTodos());
    });

    return unsubscribe;
  }, [dispatch, navigation]);

  useEffect(() => {
    if (filter) {
      dispatch(filterTodos(filter));
    } else {
      dispatch(getAllTodos());
    }
  }, [dispatch, filter]);

  /**
   * Handle selected filter
   * @param option
   */
  const onFilter = (option: 'Low' | 'Medium' | 'High') => {
    setFilter(option);
  };

  return (
    <Block safe flex style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.COLORS.PRIMARY}
      />
      <Block style={styles.topView} />
      <HomeHeader
        onPressSearch={() => navigation.navigate('Search')}
        onFilter={onFilter}
      />
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
              total={totalTodos}
              active={activeTodos.length}
              done={doneTodos.length}
              filter={filter}
              clearFilter={() => setFilter(null)}
            />
          )}
          ListEmptyComponent={() => (
            <ListEmpty
              title="NOTHING HERE"
              description="Just like your crush's replies"
              action
            />
          )}
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
