import React, { useEffect, useState } from 'react';
import { ScrollView, Image, StatusBar } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import moment from 'moment';

import Block from '../../components/Block';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Text from '../../components/Text';
import Badge from '../../components/Badge';
import { StackParamList } from '../../navigation/AppNavigator';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import {
  getSingleTodo,
  deleteTodo,
  markDoneTodo,
} from '../../store/modules/todo/actions';
import { selectTodo } from '../../store/modules/todo/selectors';
import theme from '../../constants/theme';
import styles from './styles';
import Icon from '../../components/Icon';
import ConfirmModal from '../../components/ConfirmModal';

type DetailsProps = {
  navigation: NativeStackScreenProps<StackParamList, 'Details'>['navigation'];
  route: NativeStackScreenProps<StackParamList, 'Details'>['route'];
};

const Details: React.FC<DetailsProps> = ({ navigation, route }) => {
  const itemId = route.params?.itemId;
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const dispatch = useAppDispatch();
  const todo = useAppSelector(selectTodo);
  console.log(todo);

  useEffect(() => {
    dispatch(getSingleTodo(itemId));
  }, [itemId, dispatch]);

  const deleteItem = () => {
    dispatch(deleteTodo(itemId));
    navigation.navigate('Home');
  };

  const markDone = () => {
    dispatch(markDoneTodo(itemId));
    navigation.navigate('Home');
  };

  return (
    <Block safe flex style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.COLORS.WHITE} />
      <Header leftHandler={() => navigation.goBack()} noShadow />
      <ScrollView>
        {todo ? (
          <Block flex style={styles.content}>
            <Block style={styles.imageView}>
              {todo?.image ? (
                <Image source={{ uri: todo.image }} style={styles.img} />
              ) : (
                <Icon
                  type="Ionicons"
                  name="image-outline"
                  color={theme.COLORS.SECONDARY}
                />
              )}
            </Block>
            <Block row center space="between" style={styles.actionsView}>
              <Badge title={todo.priority} type={todo.priority} />
              <Block row center>
                <Button
                  onlyIcon
                  icon="pencil-sharp"
                  iconSize={18}
                  iconColor={theme.COLORS.SECONDARY}
                  style={styles.action}
                  onPress={() => navigation.navigate('NewTask')}
                />
                <Button
                  onlyIcon
                  icon="close"
                  iconSize={20}
                  iconColor={theme.COLORS.SECONDARY}
                  style={styles.action}
                  onPress={() => setShowConfirmModal(true)}
                />
                <Button inverse style={styles.doneButton} onPress={markDone}>
                  Done
                </Button>
              </Block>
            </Block>
            <Block style={styles.itemView}>
              <Text h5 bold>
                {todo.title}
              </Text>
            </Block>
            <Block style={styles.itemView}>
              <Text body2 bold>
                Description
              </Text>
              <Block>
                <Text body1 color={theme.COLORS.SECONDARY}>
                  {todo?.description}
                </Text>
              </Block>
            </Block>
            <Block row style={styles.itemView}>
              <Text
                caption
                bold
                color={theme.COLORS.SECONDARY}
                numberOfLines={1}
                style={styles.date}>
                Created {moment(todo.createdDate).format('DD MMM YYYY')}
              </Text>
              <Text
                caption
                bold
                color={theme.COLORS.SECONDARY}
                numberOfLines={1}
                style={styles.date}>
                Modified {moment(todo.modifiedDate).format('DD MMM YYYY')}
              </Text>
            </Block>
          </Block>
        ) : null}
      </ScrollView>
      {showConfirmModal ? (
        <ConfirmModal
          visible={showConfirmModal}
          title="Delete Todo"
          description="Are you sure do you want to delete this Todo?"
          close={() => setShowConfirmModal(false)}
          action={deleteItem}
        />
      ) : null}
    </Block>
  );
};

export default Details;
