import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, FlatList  } from 'react-native';
import  Header from './components/Header';
import SearchBar from './components/SearchBar';
import Feed from './components/Feed';
import {getFirestore, collection, addDoc, Timestamp} from "firebase/firestore";
import {addPost, addReplyToPost, getAllRecords} from "./backend/apis"
import { Alert } from "react-native";
import TimeAgo from 'javascript-time-ago';

import en from 'javascript-time-ago/locale/en.json'

TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US');
const Main = () => {
  const[items, setItems] = useState([
    {question: 'Feed#1'}, 
    {question:'Feed#2'}, 
    {question: 'Feed#3'},
]); 

  async function addPost(question, time){
    try{
      await addPost(question, time)
    } catch(e){
      Alert.alert("Cannot post. Error occur");
    }
  }
  useEffect(()=>{
    const getAll = async ()=>{
      let allData = await getAllRecords();
      allData.map((post, postIndex)=>{
        allData[postIndex] = {...allData[postIndex], timePassed: timeAgo.format(allData[postIndex].createAt.toDate())}
        allData[postIndex].replies.map((reply,replyIndex)=>{
          allData[postIndex].replies[replyIndex] = {...reply , timePassed: timeAgo.format(allData[postIndex].replies[replyIndex].createAt.toDate())}
        })
      })
      // console.log(timeAgo.format(allData[0].createAt.toDate()))
      // console.log(allData[0].createAt)
      setItems(allData)
    }
    getAll()
  },[])
  
  /*
  [
    {
      postId:
      question:
      createAt
      replies: [
        {
          replyId:
          reply:
        },
        {

        }
      ]
    },
    {

    },
  ]
  */ 

  // function FlatListCustom({allData}){
  //   return (
      
  //   );
  // }
  function DataList({data}){
   
    // if (data.length !=0){
    //   console.log(data[0].createAt.toDate())
    // }
    // console.log(data[0].createAt.toDate())
    return (
      data.map((item)=>{
        console.log(item)
        return <Feed item={item} key={item.postId}/>
      })
    );
  }
  return (
    <View style={styles.container}>
      <Header/>
      <SearchBar/>
      <DataList data={items}/>
      {/* <FlatList data={items}
        renderItem = {({item}) => 
      <Feed item={item} time={item.createAt}/>}
      /> */}
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
