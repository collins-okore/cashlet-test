/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
} from 'react-native';

import Header from './src/components/Header';
import Card from './src/components/Card';
import Footer from './src/components/Footer';
import Snackbar from './src/components/Snackbar';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    goal: 'Goal 1',
    amount: 'KES 12,000',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    goal: 'Goal 2',
    amount: 'KES 12,000',
  },
];

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const [snackbarMessage, setSnackbarMessage] = useState('');

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'#727272'}
      />
      <View style={styles.content}>
        <Header />
        <View style={styles.main}>
          <Text style={styles.title}>Your Goals</Text>
          {/* <Card goal="Goal" amount="KES 23000"></Card> */}
          <FlatList
            nestedScrollEnabled
            data={DATA}
            renderItem={({item}) => (
              <Card goal={item.goal} amount={item.amount} />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>

      <Footer
        showSnackbar={() => setSnackbarOpen(true)}
        setSnackbarMessage={setSnackbarMessage}></Footer>
      <Snackbar
        visible={snackbarOpen}
        onCancel={() => setSnackbarOpen(false)}
        position="top"
        message={snackbarMessage}
        setSnackbarMessage={setSnackbarMessage}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: '#F8F9FF',
  },
  main: {
    minHeight: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: 'absolute',
    top: 160,
    right: 0,
    left: 0,
    backgroundColor: '#F8F9FF',
    paddingVertical: 20,
  },
  container: {
    height: 400,
  },
  title: {
    color: '#4A5D80',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    marginHorizontal: 30,
  },
});

export default App;
