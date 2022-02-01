import React from 'react';
import { Modal, Pressable } from 'react-native';

import Block from '../Block';
import Text from '../Text';
import Button from '../Button';

import theme from '../../constants/theme';
import styles from './styles';

type ConfirmModal = {
  visible: boolean;
  title: string;
  description: string;
  close: () => void;
  action: (arg0: any) => void;
};

const ConfirmModal: React.FC<ConfirmModal> = ({
  visible,
  title,
  description,
  close,
  action,
}) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      statusBarTranslucent
      onRequestClose={() => close()}>
      <Pressable onPress={close} style={styles.backDrop}>
        <Block style={styles.modalView}>
          <Block style={[styles.cardItem, styles.marginBottom]}>
            <Text title bold>
              {title}
            </Text>
            <Text subtitle1 color={theme.COLORS.SECONDARY}>
              {description}
            </Text>
          </Block>
          <Block row center style={styles.buttons}>
            <Block flex>
              <Button inverse style={styles.button} onPress={close}>
                No
              </Button>
            </Block>
            <Block flex>
              <Button style={styles.button} onPress={action}>
                Yes
              </Button>
            </Block>
          </Block>
        </Block>
      </Pressable>
    </Modal>
  );
};

export default ConfirmModal;
