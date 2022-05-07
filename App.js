import React, {useState} from 'react';
import { Text, View, StyleSheet  } from 'react-native';
import  Header from './components/Header';
import SearchBar from './components/SearchBar';
import Icon from '@expo/vector-icons/FontAwesome';
import Feed from './components/Feed';

const Main = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <SearchBar/>
      <Feed/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  text: {
    fontSize: 30,

  }
});


export default Main;