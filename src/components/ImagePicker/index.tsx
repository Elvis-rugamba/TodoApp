import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

import Block from '../Block';
import Text from '../Text';
import theme from '../../constants/theme';
import PickerOptionsModal from '../PickerOptionsModal';

export type ImagePickerProps = {
  label: string;
  placeholder: string;
  image?: string;
  onChange?: (arg0: any) => void;
};

const ImagePicker: React.FC<ImagePickerProps> = ({
  label,
  placeholder,
  image,
  onChange,
}) => {
  const [showOptionModal, setShowOptionModal] = useState(false);
  const [picture, setPicture] = useState<any>(null);

  useEffect(() => {
    if (image) {
      setPicture({ uri: image });
    }
  }, [image]);

  /**
   * Show option modal
   */
  const onPress = () => {
    setShowOptionModal(true);
  };

  /**
   * Handle selected option
   *
   * @param {string} option
   */
  const onSelectOption = (option: 'library' | 'camera') => {
    if (option === 'library') {
      openLibrary();
    } else {
      openCamera();
    }
  };

  /**
   * Handle response from image picker
   *
   * @param {Object} response
   * @returns
   */
  const onResponse = (response: any) => {
    if (response.didCancel || response.errorCode) {
      return;
    } else {
      const source = response.assets ? response.assets[0] : null;
      setPicture(source);
      onChange && onChange(source);
    }
  };

  /**
   * Open image library
   */
  const openLibrary = async () => {
    const response = await launchImageLibrary({
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 500,
      maxWidth: 500,
    });

    onResponse(response);
  };

  /**
   * Open camera
   */
  const openCamera = async () => {
    const response = await launchCamera({
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    });

    onResponse(response);
  };

  return (
    <>
      <Block style={styles.item}>
        <Text body1 bold style={styles.label}>
          {label}
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.picker}
          onPress={onPress}>
          {picture ? (
            <Image source={{ uri: picture.uri }} style={styles.img} />
          ) : (
            <Text body2 color={theme.COLORS.SECONDARY}>
              {placeholder}
            </Text>
          )}
        </TouchableOpacity>
      </Block>
      {showOptionModal ? (
        <PickerOptionsModal
          visible={showOptionModal}
          close={() => setShowOptionModal(false)}
          onSelectOption={onSelectOption}
        />
      ) : null}
    </>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  item: {
    marginVertical: theme.SIZES.BASE / 2,
    alignContent: 'center',
  },
  label: {
    marginBottom: 8,
  },
  picker: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 120,
    backgroundColor: theme.COLORS.BACKGROUND,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
