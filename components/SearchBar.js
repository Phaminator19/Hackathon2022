import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

const SearchBar = () => {
  return (
    <View>
        
        <TouchableOpacity style = {styles.button} >
            <TextInput placeholder= 'Type Here to search'/> 
            <Icon name="search-outline" size = {20} style={styles.magnifybutton}> </Icon>
        </TouchableOpacity>
        
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
      height: 60,
      padding: 8,
      fontSize: 16,
    },

    button: {
      backgroundColor: '#a2d2ff',
      padding: 9,
      margin: 5,
    },

    magnifybutton: {
      color: 'green',
      textAlign: 'left',
    },
});


export default SearchBar;