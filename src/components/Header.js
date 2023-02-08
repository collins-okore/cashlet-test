import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = ({}) => (
  <View style={styles.container}>
    <Text style={styles.greeting}>
      Afternoon <Text style={styles.name}>Jo</Text>
    </Text>
    <Text style={styles.description}>Here's the latest</Text>
    <Text style={styles.price}>KES 42,000</Text>
    <Text style={styles.description}>Total funds</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4A5D80',
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 20,
  },

  greeting: {
    fontSize: 20,
    paddingBottom: 5,
    color: '#F8F9FF',
  },
  name: {
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    color: '#00E771',
  },
  description: {
    color: '#F8F9FF',
    marginBottom: 10,
  },
});

export default Header;
