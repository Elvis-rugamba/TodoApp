import React from 'react';
import { Modal, Pressable, TouchableOpacity } from 'react-native';

import Block from '../Block';
import Text from '../Text';

import theme from '../../constants/theme';
import styles from './styles';

type FilterModal = {
  visible: boolean;
  close: () => void;
  onSelectOption: (option: 'Low' | 'Medium' | 'High') => void;
};

const FilterModal: React.FC<FilterModal> = ({
  visible,
  close,
  onSelectOption,
}) => {
  /**
   * Handle select option
   * @param option
   */
  const selectOption = (option: 'Low' | 'Medium' | 'High') => {
    onSelectOption(option);
    close();
  };

  return (
    <Modal visible={visible} transparent={true} onRequestClose={() => close()}>
      <Pressable onPress={close} style={styles.backDrop}>
        <Block style={styles.modalView}>
          <Block middle style={styles.titleView}>
            <Text body2 bold>
              FILTER BY PRIORITY
            </Text>
          </Block>
          <Block style={styles.content}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.button}
              onPress={() => selectOption('Low')}>
              <Text body2 bold color={theme.COLORS.SECONDARY}>
                Low Priority
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.button}
              onPress={() => selectOption('Medium')}>
              <Text body2 bold color={theme.COLORS.SECONDARY}>
                Medium Priority
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.button}
              onPress={() => selectOption('High')}>
              <Text body2 bold color={theme.COLORS.SECONDARY}>
                Hign Priority
              </Text>
            </TouchableOpacity>
          </Block>
        </Block>
      </Pressable>
    </Modal>
  );
};

export default FilterModal;
