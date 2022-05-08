import {addDoc, collection, DocumentSnapshot, getDocs } from "firebase/firestore";
import db from '../firebaseConfig.js';

// adding post into database
async function addPost(question, time){
    const res = await addDoc(collection(db, "posts"), {
      createAt: time,
      question: question
    });

}
// adding replies to certain post
async function addReplyToPost(postId, reply, time){
    const res = await addDoc(collection(db, "posts"), {
        post_id : postId,
        reply : reply, 
        createAt : time
    });
}
async function getAllPosts(){
    let posts = []
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      posts.push({
        postId: doc.id,
        question: doc.data().question,
        createAt: doc.data().createAt
        })
      console.log(doc.id, " => ", doc.data());
    });
    console.log(posts)
    return posts;
}
async function getAllReplies(){
    let replies = [];
    const querySnapshot = await getDocs(collection(db, "replies"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      replies.push({
          replyId: doc.id,
          postId: doc.data().post_id,
          reply: doc.data().reply,
          createAt: doc.data().createAt
      })
    });
    console.log(replies)
    return replies;
}
// combine all replies according to 
function combineRecords(posts, replies){
    let records= []
    posts.map((post, index)=>{
        let postReplies = []
        replies.map((reply, index)=>{
            if (reply.postId == post.postId){
                postReplies.push(reply)
            }
        })
        records.push({...post, replies: postReplies}) 
    })
    console.log(records);
    return records;
}
// get records
async function getAllRecords(){
    const posts = await getAllPosts();
    const replies = await getAllReplies();
    return combineRecords(posts, replies);
}
export {addPost, addReplyToPost,getAllRecords}
