import React, {useEffect, useRef, useState} from 'react';
import {Text, View, Animated, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Snackbar = ({
  message,
  visible,
  position,
  onCancel,
  setSnackbarMessage,
}) => {
  const animatedValue = useRef(new Animated.Value(0));

  const showSnackbar = () => {
    Animated.timing(animatedValue.current, {
      toValue: 1,
      useNativeDriver: false,
    }).start();

    setTimeout(() => {
      if (visible) {
        onCancel();
      }
    }, 10000);
  };

  const hideSnackbar = () => {
    Animated.timing(animatedValue.current, {
      toValue: 0,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    visible ? showSnackbar() : hideSnackbar();
  }, [visible]);

  return (
    <Animated.View
      style={[
        styles.snackbar,
        {
          [position]: animatedValue.current.interpolate({
            inputRange: [0, 1],
            outputRange: [-300, 0],
          }),
        },
      ]}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.container}
        onPress={() => setSnackbarMessage('User clicked snackbar')}>
        <View style={styles.messageSection}>
          <Text style={styles.message}>{message}</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.btnSection}
          onPress={onCancel}>
          <Icon name="x" size={28} color="#F8F9FF" />
        </TouchableOpacity>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  snackbar: {
    position: 'absolute',
    top: 10,
    right: 10,
    left: 10,
  },
  container: {
    borderRadius: 10,
    backgroundColor: '#E91780',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  messageSection: {
    flexShrink: 1,
  },
  message: {
    color: '#F8F9FF',
    fontSize: 15,
  },
  btnSection: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});

export default Snackbar;
