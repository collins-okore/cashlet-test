import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Card = ({goal, amount}) => (
  <View style={styles.container}>
    <View style={styles.detailsSection}>
      <Text style={styles.goal}>{goal}</Text>
      <Text style={styles.amount}>{amount}</Text>
    </View>
    <View style={styles.btnSection}>
      <TouchableOpacity activeOpacity={0.5} style={styles.btn}>
        <Text style={styles.btnText}>Finish goal</Text>
      </TouchableOpacity>
      <View style={styles.nextSection}>
        <Icon name="chevron-right" size={25} color="#4A5D80" />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 80,
    marginTop: 2,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  detailsSection: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  goal: {
    color: '#4A5D80',
    fontSize: 17,
  },
  amount: {
    color: '#B3B4BB',
  },
  btnSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#00E771',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 10,
    marginRight: 15,
  },
  btnText: {
    color: '#F8F9FF',
    fontSize: 16,
  },
  nextSection: {
    width: 40,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 0.5,
    borderLeftColor: 'rgba(1,1,1,0.3)',
  },
});

export default Card;
