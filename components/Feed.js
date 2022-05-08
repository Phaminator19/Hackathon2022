import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import { endAt } from 'firebase/firestore';
// import TimeAgo from 'javascript-time-ago';

// import en from 'javascript-time-ago/locale/en.json'

// TimeAgo.addDefaultLocale(en)
// const timeAgo = new TimeAgo('en-US');


const Feed = ({item}) => {


  return (
    <TouchableOpacity style={styles.listFeed}>
    <View style={styles.listFeed}>
        <Text style={styles.item}>{item.question} </Text>
        <Text style={styles.timePassed}>{item.timePassed} </Text>
        <Text style={styles.createBy}>By Anonymous </Text>
        {console.log(item.replies)}
        {/* {item.replies.map((reply)=>{
        return <View style={styles.replies}>
                    <Text style={styles.item}>{reply.reply} </Text>
                    <Text style={styles.timePassed}>{reply.timePassed} </Text>
                    <Text style={styles.createBy}>By Anonymous </Text>
                </View>
        })} */}
        
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    feedView:{
        flexDirection:'row', flexWrap:'wrap'
    },
    replies:{
        justifyContent: 'end'
    },
    createBy:{

    },
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