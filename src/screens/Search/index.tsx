import React, { useState, useEffect, useRef } from 'react';
import { FlatList, StatusBar } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { StackParamList } from '../../navigation/AppNavigator';
import Block from '../../components/Block';
import SearchHeader from '../../components/SearchHeader';
import ListEmpty from '../../components/ListEmpty';
import ListItem from '../../components/ListItem';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import { searchTodo } from '../../store/modules/todo/actions';
import { selectSearchResults } from '../../store/modules/todo/selectors';
import theme from '../../constants/theme';
import styles from './styles';

type SearchProps = {
  navigation: NativeStackScreenProps<StackParamList, 'Search'>['navigation'];
};

const Search: React.FC<SearchProps> = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dispatch = useAppDispatch();
  const todos = useAppSelector(selectSearchResults);

  useEffect(() => {
    timeout.current = setTimeout(() => {
      onSearch();
    }, 100);

    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [query]);

  /**
   * Handle typed text
   * @param text
   */
  const onChange = (text: string) => {
    setQuery(text);
  };

  /**
   * Search todo items
   */
  const onSearch = () => {
    dispatch(searchTodo(query));
  };

  return (
    <Block safe flex style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.COLORS.WHITE} />
      <SearchHeader
        leftHandler={() => navigation.goBack()}
        text={query}
        onChange={onChange}
        onSearch={onSearch}
      />
      <Block flex style={styles.content}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={todos}
          keyExtractor={item => `${item.id}`}
          contentContainerStyle={styles.contentContainer}
          ListEmptyComponent={() =>
            query ? (
              <ListEmpty
                title="NOTHING HERE"
                description="No search results"
                action={false}
              />
            ) : null
          }
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
      </Block>
    </Block>
  );
};

export default Search;
