import {React, useEffect }from 'react';
import { Text, View } from 'react-native';
import { initializeApp } from 'firebase/app';
import {getFirestore, collection, addDoc, Timestamp} from "firebase/firestore";
import {addPost, addReplyToPost} from "./backend/apis"
import { Alert } from "react-native";
import db from './firebaseConfig.js';

const App = () => {

  async function addPost(question, time){
    try{
      await addPost(question, time)
    } catch(e){
      Alert.alert("Cannot post. Error occur");
    }
  }



  // try {
  //   const res = await addDoc(collection(db, "posts"), {
  //     question: "Is everyone good at learning CS?"
  //   });
  //   console.log(res.id)
  // }
  // catch(e){
  //   console.error("Error adding post: ", e)
  // }
  
  
  //   console.log('Added document with ID: ', res.id);
  
   

  
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Hello  ada
      </Text>
    </View>
  );
}

export default App;