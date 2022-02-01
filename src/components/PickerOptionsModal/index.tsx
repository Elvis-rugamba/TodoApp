import React from 'react';
import { Modal, Pressable } from 'react-native';

import Block from '../Block';
import Text from '../Text';
import Button from '../Button';

import theme from '../../constants/theme';
import styles from './styles';

type PickerOptionsModal = {
  visible: boolean;
  close: () => void;
  onSelectOption: (arg0: 'library' | 'camera') => void;
};

const PickerOptionsModal: React.FC<PickerOptionsModal> = ({
  visible,
  close,
  onSelectOption,
}) => {
  const selectOption = (option: 'library' | 'camera') => {
    onSelectOption(option);
    close();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      statusBarTranslucent
      onRequestClose={() => close()}>
      <Pressable onPress={close} style={styles.backDrop}>
        <Block style={styles.modalView}>
          <Block
            row
            center
            space="between"
            style={[styles.cardItem, styles.marginBottom]}>
            <Text title bold color={theme.COLORS.BLACK}>
              Select Option
            </Text>
            <Button
              transparent
              onlyIcon
              iconType="Ionicons"
              icon="close"
              iconColor={theme.COLORS.DEFAULT}
              onPress={close}
            />
          </Block>
          <Block style={styles.cardItem}>
            <Button
              style={styles.button}
              onPress={() => selectOption('library')}>
              Library
            </Button>
          </Block>
          <Block style={styles.cardItem}>
            <Button
              style={styles.button}
              onPress={() => selectOption('camera')}>
              Camera
            </Button>
          </Block>
        </Block>
      </Pressable>
    </Modal>
  );
};

export default PickerOptionsModal;
