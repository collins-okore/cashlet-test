import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Snackbar from './Snackbar';

const Footer = ({showSnackbar, setSnackbarMessage}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.btn}
        onPress={() => {
          setSnackbarMessage(
            'This is an in-app notification snackbar to show to the user when they perform an action. Clicking it should change the text.',
          );
          showSnackbar();
        }}>
        <Text style={styles.btnText}>Show Snackbar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  btn: {
    marginHorizontal: 30,
    backgroundColor: '#00E771',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 20,
    elevation: 3,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 17,
    color: '#F8F9FF',
  },
});

export default Footer;
