import React, {useState} from 'react';
import { Text, View, StyleSheet} from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style = {styles.text}>
        Hello World
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: '#ffc8dd'
  },
  text: {
    fontSize: 23,
    textAlign: 'center', 
  },
});


export default Header;