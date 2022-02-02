import React, { useState, useEffect } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useForm, Controller } from 'react-hook-form';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { StackParamList } from '../../navigation/AppNavigator';
import Block from '../../components/Block';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Text from '../../components/Text';
import Input from '../../components/Input';
import ImagePicker from '../../components/ImagePicker';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import { getSingleTodo, updateTodo } from '../../store/modules/todo/actions';
import { selectTodo } from '../../store/modules/todo/selectors';
import theme from '../../constants/theme';
import styles from './styles';

type EditTaskProps = {
  navigation: NativeStackScreenProps<StackParamList, 'EditTask'>['navigation'];
  route: NativeStackScreenProps<StackParamList, 'EditTask'>['route'];
};

const EditTask: React.FC<EditTaskProps> = ({ navigation, route }) => {
  const itemId = route.params?.itemId;
  const [image, setImage] = useState<any>();
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<Todo>();
  const dispatch = useAppDispatch();
  const todo = useAppSelector(selectTodo);

  useEffect(() => {
    dispatch(getSingleTodo(itemId));
  }, [itemId, dispatch]);

  useEffect(() => {
    if (todo) {
      setValue('title', todo.title);
      setValue('description', todo.description);
      setValue('priority', todo.priority);
      setImage(todo.image);
    }
  }, [todo, setValue, dispatch]);

  /**
   * Handle picked image
   * @param data
   */
  const onImagePicker = (data: any) => {
    setImage(data.uri);
  };

  /**
   * Update a todo item
   */
  const onSubmit = handleSubmit(({ title, description, priority }) => {
    dispatch(
      updateTodo(itemId, { title, description, priority, image: image }),
    );
    navigation.navigate('Home');
  });

  return (
    <Block safe flex style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.COLORS.WHITE} />
      <Header leftHandler={() => navigation.goBack()} />
      <ScrollView>
        <Block flex style={styles.content}>
          <Block style={styles.titleView}>
            <Text h5 bold>
              Edit Task
            </Text>
          </Block>
          <Block style={styles.form}>
            <ImagePicker
              label="Add Image"
              placeholder="Tap to add Image"
              image={todo?.image}
              onChange={onImagePicker}
            />
            <Controller
              name="title"
              control={control}
              rules={{
                required: { value: true, message: 'Title is required' },
                maxLength: {
                  value: 140,
                  message: 'Title must not exceed 140 characters',
                },
              }}
              render={({ field: { value, onChange } }) => (
                <Input
                  label="Title"
                  placeholder="Task Tile(140 Characters)"
                  value={value}
                  onChangeText={onChange}
                  error={errors.title && errors.title.message}
                />
              )}
            />
            <Controller
              name="description"
              control={control}
              rules={{
                required: { value: true, message: 'Description is required' },
                maxLength: {
                  value: 240,
                  message: 'Description must not exceed 240 characters',
                },
              }}
              render={({ field: { value, onChange } }) => (
                <Input
                  label="Description"
                  placeholder="240 Characters"
                  multiline
                  height={90}
                  value={value}
                  onChangeText={onChange}
                  error={errors.description && errors.description.message}
                />
              )}
            />
            <Controller
              name="priority"
              control={control}
              rules={{
                required: { value: true, message: 'Priotity is required' },
              }}
              render={({ field: { value, onChange } }) => (
                <Input
                  label="Priority"
                  dropdown
                  selectedValue={value}
                  onValueChange={onChange}
                  error={errors.priority && errors.priority.message}>
                  <Picker.Item label="LOW" value="Low" />
                  <Picker.Item label="MEDIUM" value="Medium" />
                  <Picker.Item label="HIGH" value="High" />
                </Input>
              )}
            />
            <Button style={styles.button} onPress={onSubmit}>
              Update Task
            </Button>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
};

export default EditTask;
