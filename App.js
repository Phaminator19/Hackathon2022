import React, {useState} from 'react';
import { Text, View, StyleSheet, FlatList  } from 'react-native';
import  Header from './components/Header';
import SearchBar from './components/SearchBar';
import Icon from '@expo/vector-icons/FontAwesome';
import Feed from './components/Feed';
import {getFirestore, collection, addDoc, Timestamp} from "firebase/firestore";
import {addPost, addReplyToPost} from "./backend/apis"
import { Alert } from "react-native";
import db from './firebaseConfig.js';

const Main = () => {
  const[items, setItems] = useState([
    {key: 'Feed#1'}, 
    {key:'Feed#2'}, 
    {key: 'Feed#3'},
]); 

  async function addPost(question, time){
    try{
      await addPost(question, time)
    } catch(e){
      Alert.alert("Cannot post. Error occur");
    }
  }

  return (
    <View style={styles.container}>
      <Header/>
      <SearchBar/>
      <FlatList data={items}
        renderItem = {({item}) => 
      <Feed item={item} />}
      />
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
