import React, {useState} from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';


const Feed = () => {
    const[items, setItems] = useState([
        {key: 'Feed#1'}, 
        {key:'Feed#2'}, 
        {key: 'Feed#3'},
    ]); 

  return (
    <TouchableOpacity style={styles.listFeed}>
    <View style={styles}>

        <FlatList data={items}
        renderItem = {({item}) => <Text style={styles.item}>{item.key} </Text>} 
        />
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    item: {
        padding:10,
        fontSize: 18,
        height: 44,
    },

    listFeed: {
        padding: 15,
        backgroundColor:'#cdb4db',
        borderBottomWidth: 1,
        borderColor:'#eee',

    },

    listFeedView: {
        flexDirection: 'row',

    }
});


export default Feed;