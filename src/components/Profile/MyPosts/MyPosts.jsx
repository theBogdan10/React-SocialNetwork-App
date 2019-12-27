import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  
 

  let postElements=props.posts.map(p=><Post message={p.message} likesCount={p.likesCount}/>)

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
        <textarea className={s.area} placeholder="Write your post"></textarea>
        </div>
        <div>
        <button className={s.button}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  );
};

export default MyPosts;
