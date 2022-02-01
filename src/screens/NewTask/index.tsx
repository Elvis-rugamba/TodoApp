import React, { useState } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useForm, Controller } from 'react-hook-form';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import Block from '../../components/Block';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Text from '../../components/Text';
import { StackParamList } from '../../navigation/AppNavigator';
import useAppDispatch from '../../hooks/useAppDispatch';
import { createTodo } from '../../store/modules/todo/actions';
import theme from '../../constants/theme';
import styles from './styles';
import Input from '../../components/Input';
import ImagePicker from '../../components/ImagePicker';

type NewTaskProps = {
  navigation: NativeStackScreenProps<StackParamList, 'NewTask'>['navigation'];
};

const NewTask: React.FC<NewTaskProps> = ({ navigation }) => {
  const [image, setImage] = useState();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Todo>({
    defaultValues: {
      priority: 'Low',
    },
  });
  const dispatch = useAppDispatch();

  const onImagePicker = (data: any) => {
    console.log(data);
    setImage(data.uri);
  };

  const onSubmit = handleSubmit(({ title, description, priority }) => {
    dispatch(createTodo({ title, description, priority, image: image }));
    navigation.navigate('Home');
  });

  return (
    <Block safe flex style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.COLORS.WHITE} />
      <Header leftHandler={() => navigation.goBack()} title="New Task" />
      <ScrollView>
        <Block flex style={styles.content}>
          <Block style={styles.titleView}>
            <Text h5 bold>
              New Task
            </Text>
          </Block>
          <Block style={styles.form}>
            <ImagePicker
              label="Add Image"
              placeholder="Tap to add Image"
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
              Create Task
            </Button>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
};

export default NewTask;
