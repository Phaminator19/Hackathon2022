import {addDoc, collection} from "firebase/firestore";

// adding post into database
async function addPost(question, time){
    const res = await addDoc(collection(db, "posts"), {
      TimeStamp: time,
      question: question
    });

}
// adding replies to certain post
async function addReplyToPost(postId, reply, time){
    const res = await addDoc(collection(db, "posts"), {
        postId : postId,
        reply : reply, 
        time : time
    });
}
export {addPost, addReplyToPost}
